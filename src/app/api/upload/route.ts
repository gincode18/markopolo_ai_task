import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getGeminiEmbedding } from '@/lib/utils';
// Import pdf-parse using require since it doesn't support ES modules
const pdfParse = require('pdf-parse');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const storeId = formData.get('storeId') as string;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Read and parse PDF content
    const buffer = Buffer.from(await file.arrayBuffer());
    const pdfData = await pdfParse(buffer);
    const content = pdfData.text;

    // Split content into chunks of roughly 1000 characters
    const chunks = content.split(/(?<=[.!?])\s+/);
    const documents = chunks.reduce((acc: string[], chunk: string) => {
      const lastChunk = acc[acc.length - 1];
      if (!lastChunk || (lastChunk + chunk).length > 1000) {
        acc.push(chunk);
      } else {
        acc[acc.length - 1] += ' ' + chunk;
      }
      return acc;
    }, []);
    

    // Process and store documents with embeddings
    for (const doc of documents) {
      try {
        const embedding = await getGeminiEmbedding(doc);
        
        const { error: insertError } = await supabase.from('documents').insert({
          store_id: storeId,
          content: doc,
          embedding
        });

        if (insertError) {
          console.error('Error inserting document:', insertError);
          throw insertError;
        }
      } catch (error) {
        console.error('Error processing document:', error);
        throw error;
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in upload route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
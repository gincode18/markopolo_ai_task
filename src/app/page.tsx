import { ChatInterface } from '@/components/chat-interface';
import { FileUpload } from '@/components/file-upload';

export default function Home() {
  // In a real application, this would come from your authentication system
  const demoStoreId = 'demo-store';

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">eCommerce Chatbot</h1>
            <p className="text-lg text-muted-foreground">
              A powerful AI assistant for your online store, powered by RAG
              technology.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Knowledge Base</h2>
              <FileUpload storeId={demoStoreId} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Chat Interface</h2>
              <ChatInterface storeId={demoStoreId} />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Integration Guide</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                To embed this chatbot in your website, add the following script tag to your HTML:
              </p>
              <pre className="p-4 bg-muted rounded-lg overflow-x-auto">
                <code>{`<!-- Add this script to your HTML -->
<div id="store-chatbot" data-store-id="YOUR_STORE_ID"></div>
<script src="${process.env.NEXT_PUBLIC_APP_URL}/api/chatbot"></script>
`}</code>
              </pre>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Replace <code>YOUR_STORE_ID</code> with your unique store identifier.
                </p>
                <p className="text-sm text-muted-foreground">
                  The chatbot will appear as a floating button in the bottom-right corner of your website.
                  When clicked, it will open a chat window where your customers can interact with your store&apos;s AI assistant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
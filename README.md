# AI-Powered eCommerce Chatbot

A Next.js application that provides businesses with an AI-powered chatbot for their online stores. The chatbot uses RAG (Retrieval-Augmented Generation) technology with Google's Gemini AI to provide accurate, context-aware responses based on your store's knowledge base.

---

## Live Demo

🔗 [View Live Demo](https://markopolo-ai-task.vercel.app/)

---

# TestUser
Email : vishalkamboj9211@gmail.com
Password : Spark@123*

---

## Video Demo

[![Video Demo](https://img.youtube.com/vi/YOUTUBE_VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID)

Watch the video demo to see the chatbot in action and learn how to integrate it into your online store.

---

## Screenshots

### Login
![Login](https://github.com/user-attachments/assets/d21feb55-3c66-4aa3-89fc-57e601908d99)  
*Initial Login page*

### Chat Interface
![Chat Interface](https://github.com/user-attachments/assets/43350913-b7ab-42fd-8436-12391a8b5063)  
*AI chatbot providing customer support*

### Integration Upload
![Integration Upload](https://github.com/user-attachments/assets/8691b32e-bf70-46a9-bfa6-5fc4ba27721c)  
*Upload and process store documentation*

---

## Features

- 🤖 AI-powered chatbot using Google's Gemini
- 📚 RAG (Retrieval-Augmented Generation) for accurate responses
- 📄 PDF document processing for knowledge base
- 🔒 Secure authentication with Supabase
- 🎯 Store-specific chatbot instances
- 💻 Easy website integration
- 🎨 Beautiful UI with Tailwind CSS and shadcn/ui
- 📱 Responsive design
- 🔍 Vector similarity search for relevant content

---

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **AI**: Google Gemini API
- **Database**: Supabase (PostgreSQL with pgvector)
- **Authentication**: Supabase Auth
- **PDF Processing**: pdf-parse
- **Vector Embeddings**: Gemini Embedding API

---

## Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- A Supabase account
- A Google Cloud account with Gemini API access

---

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gincode18/markopolo_ai_task
   cd markopolo_ai_task
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

---

## Database Setup

The project uses Supabase with the following main tables:

- `stores`: Stores information about each online store
- `documents`: Stores processed documents and their vector embeddings

Features include:
- Vector similarity search capabilities using pgvector
- Row Level Security (RLS) policies for data protection
- Automatic embedding generation for uploaded documents

---

## Project Structure

```plaintext
├── app/                    # Next.js app directory
│   ├── api/                # API routes
│   ├── auth/               # Authentication routes
│   ├── embed/              # Embedded chat interface
│   └── page.tsx            # Main dashboard
├── components/             # React components
│   ├── auth-form.tsx       # Authentication form
│   ├── chat-interface.tsx  # Chat interface
│   ├── file-upload.tsx     # File upload component
│   └── ui/                 # UI components
├── lib/                    # Utility functions
│   ├── gemini.ts           # Gemini AI integration
│   ├── supabase.ts         # Supabase client
│   └── utils.ts            # Helper functions
└── supabase/               # Supabase migrations
```

---

## How It Works

1. **Authentication**:
   - Users sign up/sign in using email and password
   - Each user can create a store
   - Authentication is handled by Supabase

2. **Knowledge Base**:
   - Users upload PDF documents containing store information
   - Documents are processed and split into chunks
   - Text chunks are converted to vector embeddings using Gemini
   - Embeddings are stored in the database for similarity search

3. **Chat Interface**:
   - Users can interact with the AI assistant
   - Questions trigger a similarity search in the knowledge base
   - Relevant context is retrieved and sent to Gemini
   - Gemini generates accurate, context-aware responses

4. **Website Integration**:
   - Users get a unique script tag for their website
   - The script creates a floating chat button
   - Clicking opens the chat interface in an iframe
   - Each store's chatbot only accesses its own knowledge base

---

## Website Integration

Add the following code to your website:

```html
<div id="store-chatbot" data-store-id="YOUR_STORE_ID"></div>
<script src="${process.env.NEXT_PUBLIC_APP_URL}/api/chatbot"></script>
```

---

## Security

- Row Level Security (RLS) ensures users can only access their own data
- Authentication tokens are handled securely
- API routes are protected
- Environment variables for sensitive credentials

---

## Development

The project uses:
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Tailwind CSS for styling
- shadcn/ui for UI components

---

## Building for Production

Build the project:
```bash
npm run build
```

The project is configured for static exports, making it easy to deploy to various platforms.

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.


### Key Fixes:
1. Fixed headings and subheadings for proper rendering.
2. Corrected the "Add the following code to your website" section with clear HTML code formatting.
3. Improved the markdown syntax for lists, code blocks, and file structure.
4. Added spacing and separators for better readability.
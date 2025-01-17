import { ChatInterface } from '@/components/chat-interface';

export default function EmbedChatPage({
  searchParams,
}: {
  searchParams: { storeId: string };
}) {
  const { storeId } = searchParams;

  if (!storeId) {
    return (
      <div className="p-4 text-red-500">
        Error: Missing store ID parameter
      </div>
    );
  }

  return (
    <div className="h-screen">
      <ChatInterface storeId={storeId} className="h-full rounded-none shadow-none" />
    </div>
  );
}
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Zehngoh</h1>
        <p className="text-lg md:text-xl mb-6">Coming Soon...</p>
        <p className="text-sm text-gray-400 mb-8">
          We’re working hard to bring you something amazing. Stay tuned!
        </p>

        <a
          href="https://t.me/zehngoh_books"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition"
        >
          Join our Telegram
        </a>
      </div>
    </div>
  );
}

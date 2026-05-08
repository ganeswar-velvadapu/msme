import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <div className="space-y-6">
        <h1 className="text-9xl font-bold text-gray-900">404</h1>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">Page Not Found</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
          </p>
        </div>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 shadow-sm"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

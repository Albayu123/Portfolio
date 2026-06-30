import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-brand-lightBg dark:bg-brand-darkBg">
      <div className="flex items-center space-x-3 mb-6">
        <span className="w-1 h-5 bg-brand-lime rounded-full" />
        <span className="font-header font-extrabold text-sm uppercase tracking-wider text-black dark:text-white">
          NOT FOUND
        </span>
      </div>
      <h1 className="font-header font-extrabold text-6xl sm:text-7xl md:text-9xl tracking-tighter text-brand-lime mb-4">
        404
      </h1>
      <p className="text-sm md:text-base text-gray-800 dark:text-gray-300 mb-8 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center bg-brand-lime text-black font-semibold text-sm py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-brand-lime/20"
      >
        Back to Home
      </Link>
    </div>
  );
}

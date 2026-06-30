export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-lightBg dark:bg-brand-darkBg">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-8 h-8 border-2 border-brand-lime border-t-transparent rounded-full animate-spin" />
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-black dark:text-white opacity-60">
          Loading...
        </span>
      </div>
    </div>
  );
}

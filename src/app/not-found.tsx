export default function NotFound() {
  return (
    <div className="flex items-center justify-center p-5">
      <div className="text-center space-y-6">
        <svg
          fill="none"
          viewBox="0 0 200 200"
          className="w-48 h-48 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="90" fill="#f3dddd" />
          <path
            strokeWidth="12"
            stroke="#a60000"
            strokeLinecap="round"
            d="M70 70l60 60M70 130l60-60"
          />
        </svg>

        <div className="space-y-3 max-w-md mx-auto">
          <h1 className="text-2xl font-semibold text-[#101928]">
            Not Found
          </h1>

          <p className="text-[#44444B] text-center">
            We couldn&apos;t find the resource you were looking for.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="/"
            className="bg-[#0053A6] text-white text-sm font-semibold px-4 py-2 rounded-md"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}
"use client"

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex items-center justify-center p-5">
      <div className="text-center space-y-6">
        <svg
          fill="none"
          viewBox="0 0 200 200"
          className="w-48 h-48 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="90" fill="#dde8f3" />
          <path
            strokeWidth="12"
            stroke="#0053A6"
            strokeLinecap="round"
            d="M100 50v60M100 135v5"
          />
        </svg>

        <div className="space-y-3">
          <h1 className="text-2xl font-semibold text-[#101928]">
            {error.message}
          </h1>

          <p className="text-[#44444B] max-w-md">
            We apologize for the inconvenience, an error occurred. Try resetting...
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="bg-[#0053A6] text-white text-sm font-semibold px-4 py-2 rounded-md"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
// app/error.tsx (if using App Router in Next.js 14)

"use client";

import { Button } from '@/components/ui/button';
import { useEffect } from "react";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error); // Log the error for debugging purposes
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-4 text-red-500">
        Something went wrong
      </h1>
      <p className="text-lg mb-8 text-gray-600">
        An unexpected error occurred. Please try again later.
      </p>
      <Button
        onClick={reset}
        className=""
        variant="secondary"
      >
        Try Again
      </Button>
    </div>
  );
}

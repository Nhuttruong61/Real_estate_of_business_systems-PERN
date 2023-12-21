import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Oops! You seem to be lost.
      </h1>
      <p className="text-lg text-gray-600 mb-8">Here are some helpful links:</p>
      <Link href="/">
        <p className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
          Home
        </p>
      </Link>
    </div>
  );
}

export default NotFound;

import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      
      {/* 404 Number */}
      <h1 className="text-7xl md:text-9xl font-extrabold text-gray-800">
        404
      </h1>

      {/* Message */}
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-700">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500 text-center max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Back Home Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
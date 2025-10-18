import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/error404.png";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gray-50 text-center">
      <img
        className="w-64 sm:w-80 md:w-[450px] max-w-full mb-6 drop-shadow-lg"
        src={heroImage}
        alt="404 Error"
      />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-md mb-6">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
      >
        Go Back Home
      </Link>
    </div>
  );
}

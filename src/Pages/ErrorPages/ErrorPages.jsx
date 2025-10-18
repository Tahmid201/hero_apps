import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/error404.png";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <img
        className="w-80 max-w-full mb-6"
        src={heroImage}
        alt="404 Error"
      />
      <Link
        to="/"
        className="text-blue-600 underline text-lg hover:text-blue-800 transition"
      >
        Go Home
      </Link>
    </div>
  );
}

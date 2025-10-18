import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/error404.png"
export default function ErrorPage() {
  return (
    <div className="text-center mt-20">
      <img src={heroImage} alt="" />
      <Link to="/" className="text-blue-600 underline">
        Go Home
      </Link>
    </div>
  );
}

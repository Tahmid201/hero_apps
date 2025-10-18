import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} <span className="font-semibold text-white">Hero IO</span>. Designed by Tahmid.
        </p>
        <p className="text-sm sm:text-base">
          Built with <span className="text-blue-400 font-medium">React & Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

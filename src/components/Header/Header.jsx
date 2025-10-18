import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom"; 
import { IoLogoGithub } from "react-icons/io";

const Header = () => {
  return (
    <header className="bg-white text-black shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar flex justify-between items-center py-3">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
            />
            <NavLink
              to="/"
              className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight"
            >
              Hero IO
            </NavLink>
          </div>

          <nav className="hidden lg:flex space-x-8 font-medium text-base">
            <NavLink to="/" className="hover:text-blue-500">
              Home
            </NavLink>
            <NavLink to="/apps" className="hover:text-blue-500">
              Apps
            </NavLink>
            <NavLink to="/installs" className="hover:text-blue-500">
              Installations
            </NavLink>
          </nav>
          <div className="hidden sm:flex">
            <a
              href="https://github.com/Tahmid201"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:opacity-90 transition"
            >
              <IoLogoGithub className="text-lg" />
              Contribute
            </a>
          </div>

          <div className="lg:hidden dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost p-2 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-4 shadow bg-white rounded-lg w-52 text-gray-700 font-medium"
            >
              <li>
                <NavLink to="/" className="hover:text-blue-500">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/apps" className="hover:text-blue-500">
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink to="/installs" className="hover:text-blue-500">
                  Installations
                </NavLink>
              </li>
              <li>
                <a
                  href="https://github.com/Tahmid201"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 mt-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-3 py-2 rounded-md"
                >
                  <IoLogoGithub /> Contribute
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

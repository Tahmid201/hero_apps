import React, { useState } from "react";
import appsData from "../../data/AppsData.json";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";
import heroImage from "../../assets/hero.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [apps] = useState(appsData);
  const firstApps = apps.slice(0, 8);

  return (
    <div className="w-full">
      <section className="text-center py-20 px-6 sm:px-10 md:px-16 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
            We Build <br />
            <span className="text-[#632EE3]">Productive</span> Apps
          </h1>

          <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-base sm:text-lg md:text-xl">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noreferrer"
              className="text-black px-8 py-3 flex items-center gap-2 rounded bg-gray-200 hover:bg-gray-300 transition text-base sm:text-lg"
            >
              <BiLogoPlayStore className="text-xl" />
              Play Store
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              className="text-black px-8 py-3 flex items-center gap-2 bg-gray-200 rounded hover:bg-gray-300 transition text-base sm:text-lg"
            >
              <FaAppStoreIos className="text-xl" />
              App Store
            </a>
          </div>
        </div>
      </section>
      <div className="pt-12 flex justify-center bg-white">
        <img
          src={heroImage}
          alt="App preview"
          className="w-[90%] sm:w-2/3 md:w-1/2 lg:w-[40%] h-auto drop-shadow-2xl"
        />
      </div>
      <section className="bg-gradient-to-r from-[#7b2ff7] to-[#f107a3] py-16 text-white text-center mt-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10">
          Trusted By Millions, Built For You
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-16 md:gap-20">
          <div>
            <h3 className="text-4xl sm:text-5xl font-bold">29.6M</h3>
            <p className="text-base opacity-90">Total Downloads</p>
            <p className="text-sm mt-1 opacity-80">
              21% More Than Last Month
            </p>
          </div>

          <div>
            <h3 className="text-4xl sm:text-5xl font-bold">906K</h3>
            <p className="text-base opacity-90">Total Reviews</p>
            <p className="text-sm mt-1 opacity-80">
              46% More Than Last Month
            </p>
          </div>

          <div>
            <h3 className="text-4xl sm:text-5xl font-bold">132+</h3>
            <p className="text-base opacity-90">Active Apps</p>
            <p className="text-sm mt-1 opacity-80">31 More Will Launch</p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-center sm:text-left">
          Trending Apps
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {firstApps.map((app) => (
            <Link
              key={app.id}
              to={`/app/${app.id}`}
              className="border p-5 rounded-xl hover:shadow-2xl transition-shadow duration-300 bg-white"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="font-semibold mt-3 text-lg">{app.title}</h3>
              <p className="text-gray-500 text-sm">
                Downloads: {app.downloads}
              </p>
              <p className="text-yellow-500 text-sm">{app.ratingAvg}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/apps"
            className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg text-lg transition"
          >
            Show All
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

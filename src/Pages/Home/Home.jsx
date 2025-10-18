import React, { useState } from 'react';
import appsData from '../../data/AppsData.json';
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";
import heroImage from '../../assets/hero.png';
import { Link } from "react-router-dom";
const Home = () => {
  const [apps] = useState(appsData);
  const firstApps = apps.slice(0, 8);
  console.log(firstApps);

  return (
    <div className="mx-auto">
      <section className="text-center py-16 px-4 sm:px-8 bg-gray-100">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black leading-snug">
          We Build <br />
          <span className="text-[#632EE3]">Productive</span> Apps
        </h1>

        <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noreferrer"
            className="text-black px-6 py-2 flex items-center gap-2 rounded bg-gray-200 hover:bg-gray-300 transition"
          >
            <BiLogoPlayStore className="text-lg" />
            Play Store
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noreferrer"
            className="text-black px-6 py-2 flex items-center gap-2 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            <FaAppStoreIos className="text-lg" />
            App Store
          </a>
        </div>
      </section>

      <div className="pt-10 flex justify-center text-center bg-white">
        <img
          src={heroImage}
          alt="App preview"
          className="w-[85%] sm:w-2/3 md:w-1/2 h-auto drop-shadow-2xl"
        />
      </div>

      <div className="bg-gradient-to-r from-[#7b2ff7] to-[#f107a3] py-10 text-white text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8">
          Trusted By Millions, Built For You
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 md:gap-20 px-4">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold">29.6M</h3>
            <p className="text-sm opacity-90">Total Downloads</p>
            <p className="text-xs mt-1 opacity-80">21% More Than Last Month</p>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-bold">906K</h3>
            <p className="text-sm opacity-90">Total Reviews</p>
            <p className="text-xs mt-1 opacity-80">46% More Than Last Month</p>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-bold">132+</h3>
            <p className="text-sm opacity-90">Active Apps</p>
            <p className="text-xs mt-1 opacity-80">31 More Will Launch</p>
          </div>
        </div>
      </div>
      <section className="max-w-6xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-6">Trending Apps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {firstApps.map((app) => (
            <Link
              key={app.id}
              to={`/app/${app.id}`}
              className="border p-4 rounded hover:shadow-lg"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-32 object-cover rounded"
              />
              <h3 className="font-semibold mt-2">{app.title}</h3>
              <p className="text-gray-500">Downloads: {app.downloads}</p>
              <p className="text-yellow-500"> {app.ratingAvg}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/apps" className="bg-gray-800 text-white px-4 py-2 rounded">
            Show All
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

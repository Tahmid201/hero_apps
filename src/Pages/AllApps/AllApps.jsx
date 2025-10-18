import React, { useState } from "react";
import { Link } from "react-router-dom";
import appsData from "../../data/AppsData.json";
import { FaStarHalfAlt } from "react-icons/fa";

export const AllApps = () => {
  const [apps] = useState(appsData);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("none");

  const filteredApps = apps
    .filter((app) =>
      app.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "high-low") return b.downloads - a.downloads;
      if (sortOrder === "low-high") return a.downloads - b.downloads;
      return 0;
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          All Apps ({filteredApps.length})
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <input
            className="border border-gray-300 p-2 rounded-lg w-full sm:w-64 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            placeholder="Search apps..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border border-gray-300 p-2 rounded-lg text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Downloads</option>
            <option value="high-low">High → Low</option>
            <option value="low-high">Low → High</option>
          </select>
        </div>
      </div>
      {filteredApps.length === 0 ? (
        <p className="text-center text-gray-500 text-base py-10">
          No apps found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <Link
              key={app.id}
              to={`/app/${app.id}`}
              className="border border-gray-200 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition duration-300 hover:scale-[1.02]"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold text-gray-800 text-lg">
                {app.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Downloads: {app.downloads.toLocaleString()}
              </p>
              <div className="flex justify-between items-center mt-2">
                <p className="flex items-center gap-1 text-yellow-500 text-sm">
                  {app.ratingAvg} <FaStarHalfAlt />
                </p>
                <span className="text-xs text-gray-400">
                  #{app.id}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApps;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import appsData from "../../data/AppsData.json";

export const AllApps = () => {
  const [apps] = useState(appsData);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("none");

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  if (sortOrder === "high-low") {
    filteredApps.sort((a, b) => b.downloads - a.downloads);
  } else if (sortOrder === "low-high") {
    filteredApps.sort((a, b) => a.downloads - b.downloads);
  }

  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <h2 className="text-xl font-semibold">
          All Apps ({filteredApps.length})
        </h2>

        <div className="flex gap-3">
          <input
            className="border p-2 rounded w-64"
            type="text"
            placeholder="Search apps"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border p-2 rounded text-white bg-black"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Downloads</option>
            <option value="high-low">High-Low</option>
            <option value="low-high">Low-High</option>
          </select>
        </div>
      </div>

      {filteredApps.length === 0 ? (
        <p className="text-center text-gray-500">No App Found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <Link
              className="border p-4 rounded hover:shadow-lg"
              key={app.id}
              to={`/app/${app.id}`}
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-32 object-cover rounded"
              />
              <h3 className="font-semibold mt-2">{app.title}</h3>
              <p className="text-gray-500">Downloads: {app.downloads}</p>
              <p className="text-yellow-500">{app.ratingAvg}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApps;

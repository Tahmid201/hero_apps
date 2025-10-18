import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import appsData from "../../data/AppsData.json";

export default function AppDetails() {
  const { id } = useParams();
  const [apps] = useState(appsData);
  const app = apps.find((a) => a.id === Number(id));

  const [installed, setInstalled] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps") || "[]");
    return stored.some((a) => a.id === app?.id);
  });

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <p className="text-gray-600 text-lg mb-4">🚫 App Not Found</p>
        <Link
          to="/apps"
          className="text-blue-600 underline text-base hover:text-blue-800 transition"
        >
          Back to All Apps
        </Link>
      </div>
    );
  }

  const handleInstall = () => {
    const stored = JSON.parse(localStorage.getItem("installedApps") || "[]");
    if (!installed) {
      stored.push(app);
      localStorage.setItem("installedApps", JSON.stringify(stored));
      setInstalled(true);
      alert("✅ App Installed Successfully!");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Top section */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <img
          src={app.image}
          alt={app.title}
          className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-lg shadow-md"
        />

        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {app.title}
          </h2>
          <p className="text-gray-700 mb-1">
            <span className="font-semibold">Company:</span> {app.companyName}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-semibold">Downloads:</span>{" "}
            {app.downloads.toLocaleString()}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-semibold">Reviews:</span> {app.reviews}
          </p>
          <p className="text-yellow-500 font-semibold mb-4">
            ⭐ {app.ratingAvg}
          </p>

          <button
            disabled={installed}
            onClick={handleInstall}
            className={`mt-2 px-6 py-2 rounded-lg text-white transition ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90"
            }`}
          >
            {installed ? "Installed" : "Install"}
          </button>
        </div>
      </div>

      {/* Review chart */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Review Statistics
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={app.ratings}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#632EE3" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Description */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          Description
        </h3>
        <p className="text-gray-600 leading-relaxed">{app.description}</p>
      </div>

      {/* Back button */}
      <div className="text-center mt-10">
        <Link
          to="/apps"
          className="text-indigo-600 underline text-base hover:text-indigo-800 transition"
        >
          ← Back to All Apps
        </Link>
      </div>
    </div>
  );
}

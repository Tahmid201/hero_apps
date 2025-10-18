import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import appsData from '../../data/AppsData.json';

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
      <div className="text-center mt-20">
        <p className="text-gray-600 text-lg mb-3">App Not Found 😢</p>
        <Link to="/apps" className="text-blue-600 underline">
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
    <div className="max-w-4xl mx-auto py-10">
      <div className="flex flex-wrap gap-6">
        <img
          src={app.image}
          alt={app.title}
          className="w-48 h-48 object-cover rounded"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">{app.title}</h2>
          <p>Company: {app.companyName}</p>
          <p>Downloads: {app.downloads}</p>
          <p>Reviews: {app.reviews}</p>
          <p>{app.ratingAvg}</p>
          <button
            disabled={installed}
            onClick={handleInstall}
            className={`mt-4 px-6 py-2 rounded ${
              installed ? "bg-gray-400" : "bg-blue-600 text-white"
            }`}
          >
            {installed ? "Installed" : "Install"}
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">Review Chart</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={app.ratings}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">Description</h3>
        <p>{app.description}</p>
      </div>
    </div>
  );
}

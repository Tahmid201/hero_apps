import React, { useState } from "react";

export default function InstallationPage() {
  const [apps, setApps] = useState(
    JSON.parse(localStorage.getItem("installedApps") || "[]")
  );

  const handleUninstall = (id) => {
    const updated = apps.filter((app) => app.id !== id);
    setApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    alert("App Uninstalled!");
  };

  if (apps.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <p className="text-gray-600 text-lg mb-4">No Installed Apps Yet</p>
        <a
          href="/apps"
          className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
        >
          Browse Apps
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800 text-center">
        My Installed Apps
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {apps.map((app) => (
          <div
            key={app.id}
            className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-lg transition"
          >
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-32 sm:h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="font-semibold text-gray-900 text-lg mb-2 truncate">
              {app.title}
            </h3>
            <p className="text-gray-500 text-sm mb-3">
              {app.companyName || "Unknown Developer"}
            </p>
            <button
              onClick={() => handleUninstall(app.id)}
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

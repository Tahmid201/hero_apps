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
      <p className="text-center mt-20 text-gray-600">
        No Installed Apps Yet
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-2xl font-semibold mb-6">My Installed Apps</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {apps.map((app) => (
          <div key={app.id} className="border p-4 rounded">
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-32 object-cover rounded"
            />
            <h3 className="font-semibold mt-2">{app.title}</h3>
            <button
              onClick={() => handleUninstall(app.id)}
              className="mt-2 bg-red-500 text-white px-4 py-1 rounded"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

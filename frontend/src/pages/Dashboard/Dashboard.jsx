import React from "react";
import HostelerDashboard from "./HostelerDashboard";
import DayscholarDashboard from "./DayscholarDashboard";

const Dashboard = () => {
  const userRole = localStorage.getItem("role"); // Should be 'hosteler' or 'dayscholar'

  return (
    <div>
      {userRole === "hosteler" ? (
        <HostelerDashboard />
      ) : userRole === "dayscholar" ? (
        <DayscholarDashboard />
      ) : (
        <div className="text-white p-6">
          <h2 className="text-2xl font-bold">Unknown Role 🤷‍♂️</h2>
          <p>Please login again or contact support.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

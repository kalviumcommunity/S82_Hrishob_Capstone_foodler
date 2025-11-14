import React from "react";
import { useNavigate } from "react-router-dom";

const SelectRole = () => {
  const navigate = useNavigate();
  const googleUser = JSON.parse(localStorage.getItem("googleUser"));

  const handleRoleSelection = (role) => {
    // Store the user’s role in localStorage (mapped by email)
    const existingRoles = JSON.parse(localStorage.getItem("userRoles")) || {};
    existingRoles[googleUser.email] = role;
    localStorage.setItem("userRoles", JSON.stringify(existingRoles));

    // Redirect to that dashboard
    navigate(`/${role}-dashboard`);
  };

  return (
    <div className="min-h-screen bg-[#FFFBF7] flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome, {googleUser?.name}! 👋</h2>
        <p className="text-gray-500 mb-6">
          Tell us who you are so we can take you to your personalized dashboard.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => handleRoleSelection("hosteler")}
            className="w-full bg-green-500 hover:bg-green-600 py-2.5 rounded-lg text-white font-semibold shadow-md shadow-green-200 transition-all duration-300"
          >
            I’m a Hosteler 🏠
          </button>
          <button
            onClick={() => handleRoleSelection("dayscholar")}
            className="w-full bg-blue-500 hover:bg-blue-600 py-2.5 rounded-lg text-white font-semibold shadow-md shadow-blue-200 transition-all duration-300"
          >
            I’m a Dayscholar 🎒
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectRole;

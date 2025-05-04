import React from "react";
import { useNavigate, Outlet, NavLink } from "react-router-dom";
import { Home, User, ScrollText, LogOut } from "lucide-react";

const SidebarItem = ({ icon: Icon, label, to }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2 rounded-lg transition hover:bg-gray-800 ${
        isActive ? "bg-gray-800 text-white font-semibold" : "text-gray-400"
      }`
    }
  >
    <Icon size={20} />
    <span>{label}</span>
  </NavLink>
);

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout clicked");
    localStorage.removeItem("userRole"); // Clear user role on logout
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-8 text-green-400 tracking-wider">
            🍽️ Foodler
          </h2>
          <nav className="space-y-2">
            <SidebarItem icon={Home} label="Dashboard" to="/dashboard" />
            <SidebarItem icon={User} label="Profile" to="/dashboard/profile" />
            <SidebarItem icon={ScrollText} label="Orders" to="/dashboard/orders" />
          </nav>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-400 hover:text-red-500 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto bg-gradient-to-br from-gray-950 via-black to-gray-900">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

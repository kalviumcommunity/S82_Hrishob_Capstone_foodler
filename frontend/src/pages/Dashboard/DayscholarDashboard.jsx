import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Sandwich, Drumstick, Smile } from "lucide-react";

const DayscholarDashboard = () => {
  const deliveries = [
    {
      title: "Gobi Paratha",
      description: "Delivering to Hrish at 12:30 PM",
      icon: <Sandwich className="w-6 h-6 text-yellow-300" />,
    },
    {
      title: "Rajma Chawal",
      description: "Booked by Tanya for tonight",
      icon: <Drumstick className="w-6 h-6 text-red-400" />,
    },
    {
      title: "Upma & Chutney",
      description: "Requested by Sam for breakfast",
      icon: <Smile className="w-6 h-6 text-green-400" />,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Welcome Dayscholar! 🧳</h1>

      {/* Delivery List */}
      <h2 className="text-xl text-white font-semibold mb-4">Today's Deliveries 📦</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {deliveries.map((item, index) => (
          <Card
            key={index}
            className="bg-gray-900 border border-gray-800 shadow-lg hover:scale-[1.02] transition-transform"
          >
            <CardContent className="p-4 flex gap-4">
              <div className="bg-gray-800 p-3 rounded-xl">{item.icon}</div>
              <div>
                <h2 className="text-xl text-white font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pending Requests */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 rounded-2xl text-white shadow-xl">
        <h2 className="text-2xl font-semibold mb-2">Pending Meal Requests 📨</h2>
        <p className="text-sm opacity-90 mb-4">
          You’ve got 3 new food requests from hostelers. Don’t leave them hungry! 🍽️
        </p>
        <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          View Requests
        </button>
      </div>
    </div>
  );
};

export default DayscholarDashboard;

import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Pizza, Salad, Flame } from "lucide-react";

const HostelerDashboard = () => {
  const items = [
    {
      title: "Paneer Butter Masala",
      description: "Rahul is bringing it today 🔥",
      icon: <Flame className="w-6 h-6 text-orange-400" />,
    },
    {
      title: "Veg Biryani",
      description: "From Anjali’s kitchen 👩‍🍳",
      icon: <Pizza className="w-6 h-6 text-yellow-400" />,
    },
    {
      title: "Chapatis",
      description: "Mehul packs soft ones 🌾",
      icon: <Salad className="w-6 h-6 text-green-400" />,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Hey Hosteler! 🍴</h1>

      {/* Your Food Orders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {items.map((item, index) => (
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

      {/* Request Food */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-800 p-6 rounded-2xl text-white shadow-xl mt-8">
        <h2 className="text-2xl font-semibold mb-2">Want something specific?</h2>
        <p className="text-sm mb-4 opacity-80">
          You can request your favourite home food from any dayscholar! ✨
        </p>
        <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Request a Meal 🍛
        </button>
      </div>
    </div>
  );
};

export default HostelerDashboard;

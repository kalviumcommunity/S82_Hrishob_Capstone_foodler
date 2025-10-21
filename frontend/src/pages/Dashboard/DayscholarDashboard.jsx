import React, { useRef, useState, useEffect } from 'react';
import { 
  FiBell, FiCheckCircle, FiStar, FiMapPin, FiClock, FiTruck, FiZap, FiMenu, FiSmile 
} from 'react-icons/fi';
import { FaRupeeSign, FaFire } from 'react-icons/fa';

// Hardcoded data
const user = { name: 'Arjun' };

const stats = [
  { title: 'Completed Orders', value: '47', icon: <FiCheckCircle className="text-green-500" />, color: 'green' },
  { title: 'Rating', value: '4.8', icon: <FiStar className="text-yellow-500" />, color: 'yellow' },
  { title: 'Earnings', value: '₹2,340', icon: <FaRupeeSign className="text-yellow-600" />, color: 'yellow' },
  { title: 'Active Requests', value: '5', icon: <FaFire className="text-orange-500" />, color: 'orange' },
];

const foodRequests = [
  { name: 'Rajma Chawal + Pickle', requester: 'Priya Patel', location: 'Hostel Block A, Room 204', time: '1:30 PM', price: '80' },
  { name: 'Aloo Paratha + Curd', requester: 'Rohit Kumar', location: 'Hostel Block B, Room 156', time: '2:00 PM', price: '60' },
];

const activeDeliveries = [
  { name: 'Chole Bhature', for: 'Sneha Gupta', location: 'Hostel Block C, Room 301', price: '100', status: 'In Progress' }
];

const menu = [
  { name: 'Rajma Chawal', price: '80' },
  { name: 'Aloo Paratha', price: '60' },
  { name: 'Chole Bhature', price: '100' }
];

const reviews = [
  { name: 'Priya P.', rating: 5, text: "Amazing rajma! Tasted just like home 🥰" },
  { name: 'Rohit K.', rating: 5, text: "Perfect parathas, will order again!" }
];

// Main Dashboard
const DayscholarDashboard = () => {
  const wid = useRef();
  const [url, setUrl] = useState("");

  useEffect(() => {
    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dfseckyjx",
        uploadPreset: "qbvu3y5j",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Upload successful:", result.info);
          setUrl(result.info.secure_url);
        } else if (error) {
          console.error("Cloudinary error:", error);
        }
      }
    );
    wid.current = myWidget;
  }, []);

  return (
    <div className="bg-[#FFFBF7] min-h-screen font-sans">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8">
        <WelcomeBanner />
        <StatsGrid />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <NewFoodRequests />
            <ActiveDeliveries wid={wid} url={url} />
          </div>
          <div className="space-y-8">
            <QuickActions />
            <TodaysMenu />
            <RecentReviews />
          </div>
        </div>
      </main>
    </div>
  );
};

// Header
const Header = () => (
  <header className="flex justify-between items-center p-4 border-b bg-white">
    <h1 className="text-2xl font-bold text-gray-800">
      Foodler <span className="text-gray-500 font-normal">Dayscholar Dashboard</span>
    </h1>
    <div className="flex items-center space-x-6">
      <div className="relative">
        <FiBell className="w-6 h-6 text-gray-600" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">3</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg">A</div>
        <span className="font-semibold text-gray-700">Arjun Sharma</span>
      </div>
    </div>
  </header>
);

// Welcome Banner
const WelcomeBanner = () => (
  <div className="mb-8">
    <h2 className="text-3xl font-bold text-gray-800">Welcome back, {user.name}! 👋</h2>
    <p className="text-gray-500 mt-1">Ready to share some delicious home-cooked meals today?</p>
  </div>
);

// Stats Grid
const StatsGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {stats.map((stat, index) => (
      <div key={index} className="bg-white p-5 rounded-xl shadow-sm flex items-center space-x-4">
        <div className={`p-3 rounded-full bg-${stat.color}-100`}>
          {React.cloneElement(stat.icon, { className: `w-6 h-6 text-${stat.color}-500` })}
        </div>
        <div>
          <p className="text-gray-500 text-sm">{stat.title}</p>
          <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
        </div>
      </div>
    ))}
  </div>
);

// New Food Requests
const NewFoodRequests = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-bold text-gray-800 flex items-center">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">NEW</span>
        New Food Requests
      </h3>
      <a href="#" className="text-sm font-semibold text-orange-500 hover:underline">View All</a>
    </div>
    <div className="space-y-4">
      {foodRequests.map((req, index) => (
        <div key={index} className="border p-4 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex-1">
            <p className="font-bold text-lg text-gray-800">{req.name}</p>
            <p className="text-sm text-gray-500 flex items-center mt-1">
              <FiMapPin className="mr-2" /> Requested by: {req.requester} @ {req.location}
            </p>
            <p className="text-sm text-gray-500 flex items-center mt-1">
              <FiClock className="mr-2" /> Needed by {req.time}
            </p>
          </div>
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <span className="text-lg font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">₹{req.price}</span>
            <button className="flex-1 sm:flex-initial w-full px-4 py-2 text-sm font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600">Accept</button>
            <button className="flex-1 sm:flex-initial w-full px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300">Decline</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Active Deliveries with Upload Proof
const ActiveDeliveries = ({ wid, url }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4">
      <FiTruck className="mr-2" /> Active Deliveries
    </h3>
    <div className="space-y-4">
      {activeDeliveries.map((delivery, index) => (
        <div key={index} className="border p-4 rounded-lg flex justify-between items-start lg:items-center flex-col lg:flex-row">
          {/* LEFT SIDE */}
          <div className="flex-1">
            <p className="font-bold text-lg text-gray-800">{delivery.name}</p>
            <p className="text-sm text-gray-500">For: {delivery.for} @ {delivery.location}</p>
            <p className="font-bold text-green-600 mt-1">₹{delivery.price}</p>

            {/* Upload Proof Section */}
            <div className="mt-6 flex flex-col items-start">
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg shadow-md transition duration-300"
                onClick={() => wid.current.open()}
              >
                📤 Upload Proof
              </button>
              {url && (
                <img
                  src={url}
                  alt="Proof"
                  className="mt-3 rounded-lg w-32 h-32 object-cover border"
                />
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="text-right mt-4 lg:mt-0">
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mb-2">
              {delivery.status}
            </span>
            <button className="px-4 py-2 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600">
              Mark as Delivered
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Quick Actions
const QuickActions = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4">
      <FiZap className="mr-2" /> Quick Actions
    </h3>
    <div className="space-y-3">
      <button className="w-full text-left flex items-center p-3 font-semibold text-gray-700 bg-orange-100 border border-orange-200 rounded-lg hover:bg-orange-200">
        <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span> Available for Orders
      </button>
      <button className="w-full text-left p-3 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
        Update Today's Menu
      </button>
      <button className="w-full text-left p-3 font-semibold text-white bg-purple-500 rounded-lg hover:bg-purple-600">
        View Earnings Report
      </button>
    </div>
  </div>
);

// Today's Menu
const TodaysMenu = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4">
      <FiMenu className="mr-2" /> Today's Menu
    </h3>
    <ul className="space-y-3">
      {menu.map((item, index) => (
        <li key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
          <span className="font-semibold text-gray-700">{item.name}</span>
          <span className="font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">₹{item.price}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Recent Reviews
const RecentReviews = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4">
      <FiSmile className="mr-2" /> Recent Reviews
    </h3>
    <div className="space-y-4">
      {reviews.map((review, index) => (
        <div key={index}>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} className={i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"} />
            ))}
          </div>
          <p className="text-gray-600 italic mt-1">"{review.text}"</p>
          <p className="text-right text-sm font-semibold text-gray-500 mt-1">- {review.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default DayscholarDashboard;

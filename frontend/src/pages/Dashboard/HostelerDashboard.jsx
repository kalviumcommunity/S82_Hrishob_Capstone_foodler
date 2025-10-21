import React from 'react';
import { FiUser, FiShoppingCart, FiSearch, FiClock, FiPackage, FiStar } from 'react-icons/fi';
import { FaRupeeSign } from 'react-icons/fa';

// Mock Data for the Hosteler's view
const user = {
  name: 'Priya', // The student ordering the food
};

// Items available to order from different dayscholars
const availableMenuItems = [
  { id: 1, dish: 'Rajma Chawal', cook: 'Arjun Sharma', rating: 4.8, price: 80 },
  { id: 2, dish: 'Aloo Paratha (2 pcs)', cook: 'Arjun Sharma', rating: 4.9, price: 60 },
  { id: 3, dish: 'Chole Bhature', cook: 'Arjun Sharma', rating: 4.7, price: 100 },
  { id: 4, dish: 'Veg Pulao + Raita', cook: 'Riya Singh', rating: 4.9, price: 90 },
];

// The student's current active order
const activeOrder = {
  dish: 'Rajma Chawal + Pickle',
  cook: 'Arjun Sharma',
  status: 'Preparing', // Could be 'Order Accepted', 'Preparing', 'Out for Delivery'
  eta: '15 mins',
};

// The student's past orders
const orderHistory = [
  { id: 101, dish: 'Aloo Paratha + Curd', date: 'Oct 14, 2025', price: 60, status: 'Delivered' },
  { id: 98, dish: 'Veg Pulao + Raita', date: 'Oct 13, 2025', price: 90, status: 'Delivered' },
  { id: 95, dish: 'Idli Sambhar', date: 'Oct 12, 2025', price: 70, status: 'Delivered' },
];

// Main Hosteler Dashboard Component
const HostelerDashboard = () => {
  return (
    <div className="bg-[#FFFBF7] min-h-screen font-sans">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8">
        <WelcomeBanner />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <AvailableToday />
            <OrderHistory />
          </div>
          <div className="space-y-8">
            <OrderTracking />
          </div>
        </div>
      </main>
    </div>
  );
};

// Sub-components

const Header = () => (
  <header className="flex justify-between items-center p-4 border-b bg-white">
    <h1 className="text-2xl font-bold text-gray-800">Foodler <span className="text-gray-500 font-normal">Hosteler Dashboard</span></h1>
    <div className="flex items-center space-x-6">
      <FiSearch className="w-6 h-6 text-gray-600 cursor-pointer" />
      <FiShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer" />
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">P</div>
        <span className="font-semibold text-gray-700">Priya Patel</span>
      </div>
    </div>
  </header>
);

const WelcomeBanner = () => (
  <div className="mb-8">
    <h2 className="text-3xl font-bold text-gray-800">Hi, {user.name}! 👋</h2>
    <p className="text-gray-500 mt-1">What would you like to order today?</p>
  </div>
);

const AvailableToday = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h3 className="text-xl font-bold text-gray-800 mb-4">Available Today</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {availableMenuItems.map((item) => (
        <div key={item.id} className="border p-4 rounded-lg flex justify-between items-center">
          <div>
            <p className="font-bold text-lg text-gray-800">{item.dish}</p>
            <p className="text-sm text-gray-500 flex items-center mt-1">
              by {item.cook}
              <FiStar className="w-3 h-3 text-yellow-500 fill-current ml-2 mr-1" /> {item.rating}
            </p>
          </div>
          <div className="text-right">
            <p className="font-bold text-green-600 text-lg mb-2">₹{item.price}</p>
            <button className="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600">
              Order Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const OrderTracking = () => (
    <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4">
            <FiPackage className="mr-2" /> Track Your Order
        </h3>
        {activeOrder ? (
            <div>
                <div className="flex justify-between items-start p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <div>
                        <p className="font-bold text-gray-800">{activeOrder.dish}</p>
                        <p className="text-sm text-gray-500">from {activeOrder.cook}</p>
                    </div>
                    <span className="text-sm font-semibold text-orange-800 bg-orange-200 px-2 py-1 rounded-full">{activeOrder.status}</span>
                </div>
                <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-1">Estimated Arrival:</p>
                    <p className="text-2xl font-bold text-orange-500">{activeOrder.eta}</p>
                </div>
                {/* Progress Bar */}
                <div className="relative pt-1 mt-4">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-200">
                        <div style={{ width: '66%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
                    </div>
                </div>
            </div>
        ) : (
            <p className="text-gray-500">You have no active orders.</p>
        )}
    </div>
);

const OrderHistory = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4">
      <FiClock className="mr-2" /> Order History
    </h3>
    <ul className="space-y-3">
      {orderHistory.map((order) => (
        <li key={order.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="font-semibold text-gray-700">{order.dish}</p>
            <p className="text-xs text-gray-500">{order.date}</p>
          </div>
          <div className="flex items-center space-x-4">
             <span className="font-bold text-gray-800">₹{order.price}</span>
             <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                {order.status}
             </span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default HostelerDashboard;
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <nav className="flex flex-col md:flex-row justify-between items-center p-6 bg-gray-800 bg-opacity-90 shadow-md space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold tracking-wider text-white">🍱 Foodler</h1>
        <div className="space-x-4">
          <Link to="/login" className="hover:text-gray-300 transition-colors">Login</Link>
          <Link to="/register" className="hover:text-gray-300 transition-colors">Register</Link>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center px-6 py-24 gap-10">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl">
          Get <span className="text-green-400">Home-Cooked</span> Food from Your Friends
        </h2>
        <p className="text-lg max-w-xl text-gray-300">
          Foodler connects hostelers with dayscholars to share warm, tasty meals with trust and love.
        </p>
        <div className="space-x-4 mt-6">
          <Link to="/login">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all shadow-md">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-all shadow-md">
              Register
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

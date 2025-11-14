import React from "react";
import { Link } from "react-router-dom";
import { FaUtensils, FaHeart, FaClock, FaUsers, FaStar } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FFFBF7] text-gray-800 flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-white shadow-sm border-b border-gray-100 sticky top-0 z-10">
        <div className="flex items-center space-x-2">
          <FaUtensils className="text-green-500 text-2xl" />
          <h1 className="text-2xl font-extrabold text-gray-800 tracking-wide">
            Foodler
          </h1>
        </div>
        <div className="space-x-6 font-medium text-gray-600 ">
          <Link to="/login" className="hover:text-green-600 transition ">
            Login
          </Link>
          <Link to="/register" className="hover:text-green-600 transition">
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between flex-1 px-6 md:px-16 py-16 lg:py-24 gap-10">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-xl space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Home-Cooked Meals,  
            <span className="text-green-600"> Shared with Love 💚</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Foodler connects <strong>hostelers</strong> who crave homemade meals  
            with <strong>dayscholars</strong> who love to cook and share.  
            Taste comfort, community, and connection — one meal at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/register">
              <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg text-white font-semibold shadow-md shadow-green-200 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                Get Started
                <FiChevronRight />
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-white hover:bg-gray-50 border border-gray-200 px-8 py-3 rounded-lg text-gray-700 font-semibold shadow-sm transition-all duration-300 cursor-pointer ">
                Login
              </button>
            </Link>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
            alt="Home-cooked meal illustration"
            className="w-64 md:w-80 lg:w-[420px] drop-shadow-lg animate-float"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-16 bg-white border-t border-gray-100">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Why Choose <span className="text-green-600">Foodler?</span>
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaHeart className="text-red-500 text-3xl" />,
              title: "Made with Love",
              desc: "Enjoy authentic, home-cooked meals prepared by real people, not restaurants.",
            },
            {
              icon: <FaClock className="text-orange-500 text-3xl" />,
              title: "Fast & Fresh",
              desc: "Get your favorite dishes delivered quickly from nearby dayscholars.",
            },
            {
              icon: <FaUsers className="text-green-500 text-3xl" />,
              title: "Built on Trust",
              desc: "Connect, share, and rate meals with a safe and friendly community.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-[#FFFBF7] p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-3">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-800 text-center mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-center">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#FFFBF7] text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-10">
          What Our Users Say 💬
        </h3>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          {[
            {
              name: "Riya Singh",
              role: "Dayscholar",
              quote:
                "I love sharing my mom’s parathas! It feels amazing to feed my hostel friends.",
              rating: 5,
            },
            {
              name: "Arjun Sharma",
              role: "Hosteler",
              quote:
                "Foodler made hostel life better — I can finally eat food that tastes like home.",
              rating: 5,
            },
          ].map((user, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex-1"
            >
              <p className="text-gray-600 italic mb-3">“{user.quote}”</p>
              <div className="flex justify-center mb-2">
                {[...Array(user.rating)].map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400" />
                ))}
              </div>
              <h4 className="font-semibold text-gray-800">{user.name}</h4>
              <p className="text-sm text-gray-500">{user.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-gray-100 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-green-600">Foodler</span> — Made with
        ❤️ to connect hearts through food.
      </footer>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GOO from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Enter a valid email address";

    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || user.email !== email || user.password !== password) {
        alert("Invalid credentials or user not found.");
        return;
      }
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBF7] flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-2 text-gray-800 text-center">Welcome Back 👋</h2>
        <p className="text-gray-500 text-center mb-6">Login to continue with Foodler</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-50 text-gray-800 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-gray-50 text-gray-800 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1 ml-1">{errors.password}</p>
            )}
          </div>

          {/* Remember me + Forgot */}
          <div className="flex justify-between text-sm text-gray-500 items-center">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="mr-2 accent-green-500" />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-green-600 hover:text-green-500 transition">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 py-2.5 rounded-lg text-white font-semibold shadow-md shadow-green-200 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Google Button */}
        <div className="flex justify-center">
          <GOO />
        </div>

        {/* Register Link */}
        <p className="mt-6 text-center text-gray-500 text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-600 hover:text-green-500 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email address";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match";

    if (!formData.role) newErrors.role = "Please select a role";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate saving user data
      localStorage.setItem("user", JSON.stringify(formData));
      localStorage.setItem("currentUser", JSON.stringify(formData));
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBF7] flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Create Account ✨</h2>
        <p className="text-center text-gray-500 mb-6">
          Join Foodler today — connect hostellers and dayscholars!
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-1 text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-gray-50 text-gray-800 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-50 text-gray-800 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 bg-gray-50 text-gray-800 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1 ml-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 mb-1 text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter your password"
              className="w-full px-4 py-2 bg-gray-50 text-gray-800 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1 ml-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Role */}
          <div>
            <label className="block text-gray-700 mb-1 text-sm font-medium">You are a:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-50 text-gray-800 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
            >
              <option value="">Select Role</option>
              <option value="hosteler">Hosteler</option>
              <option value="dayscholar">Dayscholar</option>
            </select>
            {errors.role && <p className="text-red-500 text-xs mt-1 ml-1">{errors.role}</p>}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 py-2.5 rounded-lg text-white font-semibold shadow-md shadow-green-200 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 hover:text-green-500 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

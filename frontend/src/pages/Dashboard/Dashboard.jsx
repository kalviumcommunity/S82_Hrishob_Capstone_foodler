// src/pages/dashboard/Dashboard.jsx
import HostelerDashboard from './HostelerDashboard';
import DayscholarDashboard from './DayscholarDashboard';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('currentUser')); // 🔁 Use currentUser

  const role = user?.role;
  if (role === 'hosteler') return <HostelerDashboard />;
  if (role === 'dayscholar') return <DayscholarDashboard />;
  return <div className="text-center text-white mt-10">Invalid Role or Not Logged In</div>;
};

export default Dashboard;

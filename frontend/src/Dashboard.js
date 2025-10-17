import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState("");

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role"); // Get role from localStorage

    if (!token) {
      navigate("/login", { replace: true });
    } else {
      setRole(userRole);
      setTimeout(() => setLoading(false), 400); // Smoother transition
    }
  }, [navigate]);

  if (loading)
    return (
      <div className="loading-screen">
        <p>Loading Dashboard...</p>
      </div>
    );

  // 🟢 Redirect to the correct dashboard
  if (role === "student") navigate("/dashboard/student");
  if (role === "faculty") navigate("/dashboard/faculty");
  if (role === "hod") navigate("/dashboard/hod");

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome, {role}!</p>
      <button className="danger-btn" onClick={() => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/login", { replace: true });
        window.location.reload();
      }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

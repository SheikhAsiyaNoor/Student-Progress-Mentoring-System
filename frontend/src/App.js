import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import StudentDashboard from "./student/StudentDashboard";
import FacultyDashboard from "./faculty/FacultyDashboard";
import FacultyProfile from "./faculty/FacultyProfile";
import ViewStudents from "./faculty/ViewStudents";
import StudentRemarks from "./faculty/StudentRemarks";
import HODdashboard from "./hod/HODDashboard";
import ViewStudentsHOD from './hod/ViewStudentsHOD';
import ViewFaculty from './hod/ViewFaculty'; // Add this import
import AssignPsychologist from './hod/AssignPsychologist'; // Add this import

import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(""); // ✅ Track user role
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role"); // ✅ Get role from localStorage
    setIsAuthenticated(!!token);
    setRole(userRole);
    setTimeout(() => setLoading(false), 400);
  }, []);

  if (loading)
    return (
      <div className="loading-screen">
        <p>Loading...</p>
      </div>
    );

  return (
    <>
      <Navbar />
      <Routes>
  {/* ✅ Login & Register */}
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  {/* ✅ Student Routes */}
  <Route path="/dashboard/*" element={<StudentDashboard />} />

  {/* ✅ Faculty Routes */}
  <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
  <Route path="/faculty/profile" element={<FacultyProfile />} />
  <Route path="/faculty/students" element={<ViewStudents />} />
  <Route path="/faculty/remarks" element={<StudentRemarks />} />

  // ...existing code...
{/* ✅ HOD Routes */}
<Route path="/hod" element={<HODdashboard />}>
  <Route path="students" element={<ViewStudentsHOD />} />
  <Route path="faculty" element={<ViewFaculty />} />
  <Route path="assign-psychologist" element={<AssignPsychologist />} />
</Route>

</Routes>


    </>
    
  );
};

export default App;

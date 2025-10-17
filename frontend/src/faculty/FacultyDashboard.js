// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./FacultyDashboard.css";

// const FacultyDashboard = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   // const [faculty, setFaculty] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       // navigate("/login", { replace: true });
//       // return;
//     }

//     fetch("http://localhost:3000/api/faculty/profile", {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.error) {
//           // navigate("/login", { replace: true });
//         } else {
//           // setFaculty(data);
//           // setLoading(false);
//         }
//       })
//       // .catch(() => navigate("/login", { replace: true }));
//   }, [navigate]);

//   if (loading) return <p>Loading Faculty Dashboard...</p>;
//   loading = false; // Reset loading state after the first render
//   return (
//     <div className="faculty-dashboard">
//       <h2>Faculty Dashboard</h2>
//       {/* <p>Welcome to the dashboard!</p> */}

//       <ul>
//         <a href="/faculty/students"><strong>View Students</strong></a><br></br>
//         <a href="/faculty/remarks"><strong>Student Remarks</strong></a><br></br>
//         <a href="/faculty/profile"><strong>Your Profile</strong></a><br></br>
//       </ul>
// {/* 
//       <button className="danger-btn" onClick={() => {
//         localStorage.removeItem("token");
//         navigate("/login", { replace: true });
//         window.location.reload();
//       }}>
//         Logout
//       </button> */}
//     </div>
//   );
// };

// export default FacultyDashboard;
// import React from "react";
// import "./FacultyDashboard.css";

// const FacultyDashboard = () => {
  
//   return (
//     <div className="faculty-dashboard">
//       <h2>Faculty Dashboard</h2>
//       <ul>
//         <a href="/faculty/students"><strong>View Students</strong></a><br></br>
//         <a href="/faculty/remarks"><strong>Student Remarks</strong></a><br></br>
//         <a href="/faculty/profile"><strong>Your Profile</strong></a><br></br>
//       </ul>
//     </div>
//   );
// };

// export default FacultyDashboard;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FacultyDashboard.css";

const FacultyDashboard = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <div className="faculty-dashboard">
      <div className="dashboard-header">
        <h2>Faculty Dashboard</h2>
        <div className="header-right">
          <span className="faculty-name">Dr. John Doe</span>
          <button className="logout-btn">Logout</button>
        </div>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>15</h3>
          <p>Total Students</p>
        </div>
        <div className="stat-card">
          <h3>25</h3>
          <p>Remarks Made</p>
        </div>
        <div className="stat-card">
          <h3>95%</h3>
          <p>Attendance Rate</p>
        </div>
      </div>

      <div className="dashboard-cards">
        <Link to="/faculty/students" className="menu-card">
          <i className="fas fa-users"></i>
          <h3>View Students</h3>
          <p>Manage and monitor your assigned students</p>
        </Link>

        <Link to="/faculty/remarks" className="menu-card">
          <i className="fas fa-comment-alt"></i>
          <h3>Student Remarks</h3>
          <p>Add and manage performance remarks</p>
        </Link>

        <Link to="/faculty/profile" className="menu-card">
          <i className="fas fa-user-circle"></i>
          <h3>Your Profile</h3>
          <p>View and update your information</p>
        </Link>

        <div className="menu-card" onClick={() => setShowEmailForm(true)}>
          <i className="fas fa-envelope"></i>
          <h3>Contact HOD</h3>
          <p>Send message to department head</p>
        </div>
      </div>

      {showEmailForm && (
        <div className="modal-overlay">
          <div className="email-form">
            <h3>Message to HOD</h3>
            <form>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="Enter subject" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Type your message here..."></textarea>
              </div>
              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={() => setShowEmailForm(false)}>
                  Cancel
                </button>
                <button type="submit" className="send-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacultyDashboard;
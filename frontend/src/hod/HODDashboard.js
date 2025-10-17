// import React from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import "./HODDashboard.css";

// const HODDashboard = () => {
//   return (
//     <div className="hod-dashboard-container">
//       <aside className="hod-sidebar">
//         <h2>HOD Dashboard</h2>
//         <nav>
//           <ul>
//             <li>
//               <NavLink to="/hod/students" activeclassname="active">View Students</NavLink>
//             </li>
//             <li>
//               <NavLink to="/hod/faculty" activeclassname="active">View Faculty</NavLink>
//             </li>
//             <li>
//               <NavLink to="/hod/assign-psychologist" activeclassname="active">Assign Psychologist</NavLink>
//             </li>
//           </ul>
//         </nav>
//       </aside>
//       <main className="hod-dashboard-content">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default HODDashboard;

import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./HODDashboard.css";

const HODDashboard = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailData, setEmailData] = useState({
    faculty: "",
    subject: "",
    message: ""
  });

  return (
    <div className="hod-dashboard-container">
      <aside className="hod-sidebar">
        <h2>HOD Dashboard</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="/hod/students" activeclassname="active">View Students</NavLink>
            </li>
            <li>
              <NavLink to="/hod/faculty" activeclassname="active">View Faculty</NavLink>
            </li>
            <li>
              <NavLink to="/hod/assign-psychologist" activeclassname="active">Assign Psychologist</NavLink>
            </li>
          </ul>
        </nav>
        <button className="email-btn" onClick={() => setShowEmailModal(true)}>
          Contact Faculty
        </button>
      </aside>
      <main className="hod-dashboard-content">
        <Outlet />
      </main>

      {showEmailModal && (
        <div className="email-modal">
          <div className="modal-content">
            <h3>Contact Faculty Member</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              console.log('Email sent:', emailData);
              setShowEmailModal(false);
              setEmailData({ faculty: "", subject: "", message: "" });
            }}>
              <div className="form-group">
                <label>Select Faculty</label>
                <select 
                  value={emailData.faculty}
                  onChange={(e) => setEmailData({...emailData, faculty: e.target.value})}
                  required
                >
                  <option value="">Choose faculty member</option>
                  <option value="1">Dr. Sarah Johnson - CSE</option>
                  <option value="2">Dr. Michael Brown - ECE</option>
                  <option value="3">Dr. Emily Wilson - MECH</option>
                </select>
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input 
                  type="text"
                  value={emailData.subject}
                  onChange={(e) => setEmailData({...emailData, subject: e.target.value})}
                  placeholder="Enter subject"
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  value={emailData.message}
                  onChange={(e) => setEmailData({...emailData, message: e.target.value})}
                  placeholder="Type your message here..."
                  rows="4"
                  required
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={() => setShowEmailModal(false)}>
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

export default HODDashboard;
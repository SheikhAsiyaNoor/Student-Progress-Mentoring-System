// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import Profile from "./Profile";
// import StudentAcademics from "./StudentAcademics";
// import CoCurricular from "./CoCurricular";
// import InternshipProject from "./InternshipProject";
// import ReportIssues from "./ReportIssues";
// import ParentVisitSheet from './ParentVisitSheet'; 
// import "./StudentDashboard.css";

// const StudentDashboard = () => {
//   const [selectedPage, setSelectedPage] = useState("profile"); // Default page

//   const renderPage = () => {
//     switch (selectedPage) {
//       case "profile":
//         return <Profile />;
//       case "academics":
//         return <StudentAcademics />;
//       case "co-curricular":
//         return <CoCurricular />;
//       case "internship":
//         return <InternshipProject />;
//       case "report-issues":
//         return <ReportIssues />;
//       case "parent-visit":
//         return <ParentVisitSheet />; 
//       default:
//         return <Profile />; // Default to Profile
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <aside className="sidebar">
//         <h2>Student Dashboard</h2>
//         <nav>
//           <ul>
//             <li><NavLink to="#" onClick={() => setSelectedPage("profile")}><strong>Profile</strong></NavLink></li><br></br>
//             <br></br> 
//             <li><NavLink to="#" onClick={() => setSelectedPage("academics")}>Academic Performance</NavLink></li><br></br> 
//             <li><NavLink to="#" onClick={() => setSelectedPage("co-curricular")}>Co-Curricular Activities</NavLink></li><br></br> 
//             <li><NavLink to="#" onClick={() => setSelectedPage("internship")}>Internships & Projects</NavLink></li><br></br> 
//             <li><NavLink to="#" onClick={() => setSelectedPage("report-issues")}>Report Issues</NavLink></li><br></br>
//             <li><NavLink to="#" onClick={() => setSelectedPage("parent-visit")}>Parent Visit Sheet</NavLink></li><br></br>
//           </ul>
//         </nav>
//       </aside>

//       {/* Render selected component here */}
//       <main className="dashboard-content">
//         {renderPage()}
//       </main>
//     </div>
//   );
// };

// export default StudentDashboard;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";
import StudentAcademics from "./StudentAcademics";
import CoCurricular from "./CoCurricular";
import InternshipProject from "./InternshipProject";
import ReportIssues from "./ReportIssues";
import ParentVisitSheet from './ParentVisitSheet';
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const [selectedPage, setSelectedPage] = useState("profile");

  const menuItems = [
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "academics", label: "Academic Performance", icon: "📚" },
    { id: "co-curricular", label: "Co-Curricular Activities", icon: "🎯" },
    { id: "internship", label: "Internships & Projects", icon: "💼" },
    { id: "report-issues", label: "Report Issues", icon: "🔔" },
    { id: "parent-visit", label: "Parent Visit Sheet", icon: "👪" }
  ];

  const renderPage = () => {
    switch (selectedPage) {
      case "profile": return <Profile />;
      case "academics": return <StudentAcademics />;
      case "co-curricular": return <CoCurricular />;
      case "internship": return <InternshipProject />;
      case "report-issues": return <ReportIssues />;
      case "parent-visit": return <ParentVisitSheet />;
      default: return <Profile />;
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="student-avatar">
            <img src="https://via.placeholder.com/50" alt="Student" />
          </div>
          <h2>Student Dashboard</h2>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map(item => (
            <NavLink
              key={item.id}
              to="#"
              className={`nav-item ${selectedPage === item.id ? 'active' : ''}`}
              onClick={() => setSelectedPage(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn">
            <span className="icon">🚪</span>
            Logout
          </button>
        </div>
      </aside>

      <main className="dashboard-content">
        <div className="content-header">
          <h1>{menuItems.find(item => item.id === selectedPage)?.label}</h1>
          <div className="header-actions">
            <button className="notification-btn">
              🔔
              <span className="notification-badge">3</span>
            </button>
            <button className="profile-btn">
              <img src="https://via.placeholder.com/30" alt="Profile" />
            </button>
          </div>
        </div>

        <div className="content-body">
          {renderPage()}
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
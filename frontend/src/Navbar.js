import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login", { replace: true });
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisSaRg9e6Kt9lPEq7pH8-F4RIKOoZ9HT4G91aXFVwzdySq9HURQdcU6G6j1icFgmD7Wj3RkLo01fijv-dfXY5Qfs22mmQArnT-POo_4Pl8Y1D_nhH_-A5hN55Vfvg5atJ03hyDUXvxG4ADHDFpzhna2IehbwVuSQkQpNLj_w8vNL9aTC-LwMBzEvm5/w1200-h630-p-k-no-nu/National%20Institute%20of%20Technology%20Andhra%20Pradesh.png" height={50}></img>
      <div className="navbar-brand"><b>Student Progress Mentoring System</b> - <i>SPMS</i></div>
      <div className="navbar-links">
        {isAuthenticated ? (
          <>
            <button className="nav-btn" onClick={() => navigate("/dashboard/profile", { replace: true })}>
              Dashboard
            </button>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="nav-btn" onClick={() => navigate("/login")}>Login</button>
            <button className="nav-btn" onClick={() => navigate("/register")}>Register</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

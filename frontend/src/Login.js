import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail]       = useState("");
//made by me
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(true);
  const navigate                = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard/profile", { replace: true });
    } else {
      setLoading(false); // Stop loading only if not authenticated
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setLoading(false);

      console.log("Login API Response:", data); // ✅ Debug API response

      if (response.ok) {
        // Ensure the user object and account_type exist in the response
        if (!data?.user?.accountType) {
          setError("Role not received from server.");
          console.error("Role Missing in Response:", data);
          return;
        }

        localStorage.setItem("token", data.sessionId); // Store session ID
        localStorage.setItem("role", data.user.accountType); // ✅ Fix: Use `accountType`

        console.log("Stored Role in LocalStorage:", localStorage.getItem("role")); // Debugging log

        // Redirect based on role
        if (data.user.accountType === "STUDENT") navigate("/dashboard/student");
        else if (data.user.accountType === "FACULTY") navigate("/faculty/dashboard");
        else if (data.user.accountType === "HOD") navigate("/dashboard/hod");
        else navigate("/dashboard");

        setTimeout(() => window.location.reload(), 100);
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (err) {
      setLoading(false);
      setError("Server error. Try again later.");
      console.error("Login Error:", err);
    }
  };
  
  

  if (loading) return <p>Loading...</p>;

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <p className="error-text">{error}</p>}
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <br />
        <button type="submit">Login</button>
        <p>Don't have an account? Click the 'Register' button!</p>
        <a href="/register">Register</a>
      </form>
    </div>
  );
};

export default Login;

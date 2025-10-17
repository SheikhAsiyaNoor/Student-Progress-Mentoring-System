import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [name, setName]         = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(true);
  const [accountType, setAccountType] = useState("");
  const navigate                = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard/profile", { replace: true });
    } else {
      setLoading(false);
    }
  }, [navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, accountType })
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("role", accountType); // Save accountType as "role" in localStorage
        alert("Registration successful! Please login.");
        navigate("/login", { replace: true });
        setTimeout(() => window.location.reload(), 100);
      } else {
        setError(data.error || "Registration failed");
      }
    } catch (err) {
      setError("Server error. Try again later.");
    }
};

  if (loading) return <p>Loading...</p>;

  return (
    <div className="auth-container">
      <h2>Register</h2>
      {error && <p className="error-text">{error}</p>}
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <br />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <br />
        <select value={accountType} onChange={(e) => setAccountType(e.target.value)} required>
          <option value="" disabled>Select Account Type</option>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="head_of_department">HOD</option> {/* Updated value */}
        </select>
        <br />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? Click the 'Login' button!</p>
      <a href="/login">Login</a>
    </div>
  );
};

export default Register;

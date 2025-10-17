import React, { useEffect, useState } from "react";
import "./FacultyProfile.css";

const FacultyProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    fetch("http://localhost:3000/api/faculty/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading Profile...</p>;

  return (
    <div className="faculty-profile">
      <h2>Faculty Profile</h2>
      {profile ? (
        <div>
          <p><strong>Name:</strong> Could not fetch</p>
          <p><strong>Email:</strong> Could not fetch</p>
          <p><strong>Department:</strong> Could not fetch</p>
        </div>
      ) : (
        <p>Could not load profile.</p>
      )}
    </div>
  );
};

export default FacultyProfile;

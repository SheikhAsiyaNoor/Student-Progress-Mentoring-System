import React, { useEffect, useState } from "react";

const StudentAcademics = () => {
  const [academics, setAcademics] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAcademics = async () => {
      const sessionId = localStorage.getItem("sessionId");
      if (!sessionId) {
        setError("No session found. Please log in.");
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/api/student/academics", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "session-id": sessionId,
          },
        });

        if (!response.ok) throw new Error("No data available: 200");

        const data = await response.json();
        setAcademics(data);
      } catch (err) {
        setError("No data available (CODE: 200)");
      }
    };

    fetchAcademics();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!academics) return <p>Loading...</p>;

  return (
    <div>
      <h2>Academic Performance</h2>
      <p>CGPA: {academics.cgpa}</p>
      <p>Courses: {academics.courses.join(", ")}</p>
    </div>
  );
};

export default StudentAcademics;

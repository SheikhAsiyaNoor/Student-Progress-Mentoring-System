import React, { useEffect, useState } from "react";

const CoCurricular = () => {
  const [activities, setActivities] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      const sessionId = localStorage.getItem("sessionId");
      if (!sessionId) {
        setError("No session found. Please log in.");
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/api/student/cocurricular", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "session-id": sessionId,
          },
        });

        if (!response.ok) throw new Error("No data available: 200");

        const data = await response.json();
        setActivities(data);
      } catch (err) {
        setError("No data available (CODE: 200)");
      }
    };

    fetchActivities();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!activities) return <p>Loading...</p>;

  return (
    <div>
      <h2>Co-Curricular Activities</h2>
      <p>{activities.activities.join(", ")}</p>
    </div>
  );
};

export default CoCurricular;

// import React, { useEffect, useState } from "react";
// import "./StudentRemarks.css";

// const StudentRemarks = () => {
//   const [students, setStudents] = useState([]);
//   const [selectedStudent, setSelectedStudent] = useState("");
//   const [remark, setRemark] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     fetch("http://localhost:3000/api/faculty/students", {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setStudents(data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   const submitRemark = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     const token = localStorage.getItem("token");

//     const response = await fetch(`http://localhost:3000/api/faculty/remarks/${selectedStudent}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ remark }),
//     });

//     const data = await response.json();
//     setMessage(data.message || "Failed to add remark");
//   };

//   if (loading) return <p>Loading students...</p>;

//   return (
//     <div className="student-remarks">
//       <h1>Student Remarks</h1>
//       <form onSubmit={submitRemark}>
//         <select onChange={(e) => setSelectedStudent(e.target.value)} required>
//           <option value="">Select Student</option>
//           {students.map((s) => (
//             <option key={s.id} value={s.id}>{s.name} - {s.rollNumber}</option>
//           ))}
//         </select><br></br><br></br>
//         <textarea placeholder="Enter remark" value={remark} onChange={(e) => setRemark(e.target.value)} required />
//         <br></br>
//         <button type="submit">Submit Remark</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default StudentRemarks;
import React, { useEffect, useState } from "react";
import "./StudentRemarks.css";

const StudentRemarks = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [remark, setRemark] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // For success/error styling

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:3000/api/faculty/students", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setMessage("Failed to load students");
        setMessageType("error");
      });
  }, []);

  const submitRemark = async (e) => {
    e.preventDefault();
    setMessage("");

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`http://localhost:3000/api/faculty/remarks/${selectedStudent}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ remark }),
      });

      const data = await response.json();
      setMessage(data.message || "Remark added successfully");
      setMessageType(response.ok ? "success" : "error");
      if (response.ok) {
        setRemark(""); // Clear form on success
      }
    } catch (error) {
      setMessage("Failed to add remark");
      setMessageType("error");
    }
  };

  if (loading) return <div className="loading">Loading students...</div>;

  return (
    <div className="student-remarks-container">
      <div className="remarks-card">
        <h2>Add Student Remarks</h2>
        <form onSubmit={submitRemark}>
          <div className="form-group">
            <label htmlFor="student-select">Select Student</label>
            <select
              id="student-select"
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              required
            >
              <option value="">Choose a student</option>
              {students.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} - {s.rollNumber}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="remark-textarea">Remark</label>
            <textarea
              id="remark-textarea"
              placeholder="Enter your remarks here..."
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
              required
              rows="4"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Submit Remark
            </button>
          </div>
        </form>
        
        {message && (
          <div className={`message ${messageType}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentRemarks;
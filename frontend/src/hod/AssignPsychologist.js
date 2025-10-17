// import React, { useEffect, useState } from "react";
// //import "./AssignPsychologist.css";

// const AssignPsychologist = () => {
//   const [students, setStudents] = useState([]);
//   const [psychologists, setPsychologists] = useState([]);
//   const [selectedStudent, setSelectedStudent] = useState("");
//   const [selectedPsychologist, setSelectedPsychologist] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:3000/api/hod/students", {
//       headers: { "Session-Id": localStorage.getItem("token") },
//     })
//       .then((res) => res.json())
//       .then((data) => setStudents(data))
//       .catch((err) => console.error("Error fetching students:", err));

//     fetch("http://localhost:3000/api/hod/psychologists", {
//       headers: { "Session-Id": localStorage.getItem("token") },
//     })
//       .then((res) => res.json())
//       .then((data) => setPsychologists(data))
//       .catch((err) => console.error("Error fetching psychologists:", err));
//   }, []);

//   const handleAssign = () => {
//     fetch("http://localhost:3000/api/hod/assign-psychologist", {
//       method: "POST",
//       headers: { "Content-Type": "application/json", "Session-Id": localStorage.getItem("token") },
//       body: JSON.stringify({ studentId: selectedStudent, psychologistId: selectedPsychologist }),
//     })
//       .then((res) => res.json())
//       .then(() => alert("Psychologist Assigned Successfully"))
//       .catch((err) => console.error("Error assigning psychologist:", err));
//   };

//   return (
//     <div className="assign-container">
//       <h2>Assign Psychologist</h2>
//       <select onChange={(e) => setSelectedStudent(e.target.value)}>
//         <option value="">Select Student</option>
//         {students.map((s) => (
//           <option key={s.id} value={s.id}>{s.name} ({s.rollNo})</option>
//         ))}
//       </select>
//       <select onChange={(e) => setSelectedPsychologist(e.target.value)}>
//         <option value="">Select Psychologist</option>
//         {psychologists.map((p) => (
//           <option key={p.id} value={p.id}>{p.name}</option>
//         ))}
//       </select>
//       <button onClick={handleAssign}>Assign</button>
//     </div>
//   );
// };

// export default AssignPsychologist;
import React, { useState } from "react";
import "./AssignPsychologist.css";

const AssignPsychologist = () => {
  const [formData, setFormData] = useState({
    student: "",
    psychologist: "",
    reason: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="assign-psychologist-container">
      <div className="assign-card">
        <h2>Assign Psychologist to Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="student">Select Student</label>
            <select 
              id="student"
              value={formData.student}
              onChange={(e) => setFormData({...formData, student: e.target.value})}
              required
            >
              <option value="">Choose a student</option>
              <option value="1">John Doe - 20CS101</option>
              <option value="2">Jane Smith - 20CS102</option>
              <option value="3">Mike Wilson - 20CS103</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="psychologist">Select Psychologist</label>
            <select
              id="psychologist"
              value={formData.psychologist}
              onChange={(e) => setFormData({...formData, psychologist: e.target.value})}
              required
            >
              <option value="">Choose a psychologist</option>
              <option value="1">Dr. Emily Johnson - Behavioral Psychology</option>
              <option value="2">Dr. Mark Wilson - Clinical Psychology</option>
              <option value="3">Dr. Sarah Brown - Educational Psychology</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="reason">Reason for Assignment</label>
            <textarea
              id="reason"
              value={formData.reason}
              onChange={(e) => setFormData({...formData, reason: e.target.value})}
              required
              placeholder="Please provide detailed reason for assigning the psychologist..."
              rows="4"
            />
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn">Cancel</button>
            <button type="submit" className="submit-btn">Assign Psychologist</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignPsychologist;
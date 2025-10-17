// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "./ViewStudents.css";

// // const ViewStudents = () => {
// //   const navigate = useNavigate();
// //   const [students, setStudents] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");

// //     fetch("http://localhost:3000/api/faculty/students", {
// //       headers: { Authorization: `Bearer ${token}` },
// //     })
// //       .then((res) => res.json())
// //       .then((data) => {
// //         setStudents(data);
// //         setLoading(false);
// //       })
// //       .catch(() => setLoading(false));
// //   }, []);

// //   if (loading) return <p>Loading students...</p>;

// //   return (
// //     <div className="view-students">
// //       <h2>Students Under Mentorship</h2>
// //       <ul>
// //         {students.length > 0 ? (
// //           students.map((student) => (
// //             <li key={student.id} onClick={() => navigate(`/faculty/student/${student.id}`)}>
// //               {student.name} - {student.rollNumber}
// //             </li>
// //           ))
// //         ) : (
// //           <p>No students assigned.</p>
// //         )}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default ViewStudents;
// import React from "react";
// import "./ViewStudents.css";

// const ViewStudents = () => {
//   const students = [
//     { id: 1, name: "John Doe", rollNo: "20CS101", branch: "CSE", year: 3, cgpa: 8.5, attendance: "85%" },
//     { id: 2, name: "Jane Smith", rollNo: "20CS102", branch: "CSE", year: 3, cgpa: 9.0, attendance: "90%" },
//     // Add more sample data as needed
//   ];

//   return (
//     <div className="view-students">
//       <h2>Student List</h2>
//       <div className="filters">
//         <input type="text" placeholder="Search by name or roll number..." />
//         <select>
//           <option value="">All Branches</option>
//           <option value="CSE">CSE</option>
//           <option value="ECE">ECE</option>
//         </select>
//         <select>
//           <option value="">All Years</option>
//           <option value="1">1st Year</option>
//           <option value="2">2nd Year</option>
//         </select>
//       </div>
//       <table className="students-table">
//         <thead>
//           <tr>
//             <th>Roll No</th>
//             <th>Name</th>
//             <th>Branch</th>
//             <th>Year</th>
//             <th>CGPA</th>
//             <th>Attendance</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map(student => (
//             <tr key={student.id}>
//               <td>{student.rollNo}</td>
//               <td>{student.name}</td>
//               <td>{student.branch}</td>
//               <td>{student.year}</td>
//               <td>{student.cgpa}</td>
//               <td>{student.attendance}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ViewStudents;
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ViewStudents.css";

const ViewStudents = () => {
  const navigate = useNavigate();
  
  const students = [
    { id: 1, name: "John Doe", rollNo: "20CS101", branch: "CSE", year: 3, cgpa: 8.5, attendance: "85%" },
    { id: 2, name: "Jane Smith", rollNo: "20CS102", branch: "CSE", year: 3, cgpa: 9.0, attendance: "90%" },
  ];

  const handleStudentClick = (studentId) => {
    navigate(`/dashboard/academics/${studentId}`);
  };

  return (
    <div className="view-students">
      <h2>Student List</h2>
      <div className="filters">
        <input type="text" placeholder="Search by name or roll number..." />
        <select>
          <option value="">All Branches</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
        </select>
        <select>
          <option value="">All Years</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
        </select>
      </div>
      <table className="students-table">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Year</th>
            <th>CGPA</th>
            <th>Attendance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>{student.branch}</td>
              <td>{student.year}</td>
              <td>{student.cgpa}</td>
              <td>{student.attendance}</td>
              <td>
                <button 
                  onClick={() => handleStudentClick(student.id)}
                  className="view-academics-btn"
                >
                  View Academics
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewStudents;
// import React, { useEffect, useState } from "react";
// //import "./ViewStudents.css";

// const ViewStudents = () => {
//   const [students, setStudents] = useState([]);
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:3000/api/hod/students", {
//       headers: { "Session-Id": localStorage.getItem("token") },
//     })
//       .then((res) => res.json())
//       .then((data) => setStudents(data))
//       .catch((err) => console.error("Error fetching students:", err));
//   }, []);

//   const handleSelectStudent = (student) => {
//     setSelectedStudent(student);
//   };

//   return (
//     <div className="students-list-container">
//       <h2>Student List</h2>
//       <table className="students-table">
//         <thead>
//           <tr>
//             <th>Roll No</th>
//             <th>Name</th>
//             <th>Mentor</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) => (
//             <tr key={student.rollNo}>
//               <td>{student.rollNo}</td>
//               <td>{student.name}</td>
//               <td>{student.mentor}</td>
//               <td>
//                 <button onClick={() => handleSelectStudent(student)}>View</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {selectedStudent && (
//         <div className="student-details">
//           <h3>Student Details</h3>
//           <p><b>Name:</b> {selectedStudent.name}</p>
//           <p><b>Roll No:</b> {selectedStudent.rollNo}</p>
//           <p><b>Mentor:</b> {selectedStudent.mentor}</p>
//           <p><b>CGPA:</b> {selectedStudent.cgpa}</p>
//           <p><b>Issues:</b> {selectedStudent.issues || "No reported issues"}</p>
//           <button onClick={() => window.location = `mailto:${selectedStudent.mentorEmail}`}>Email Mentor</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewStudents;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewStudentsHOD.css';

const ViewStudentsHOD = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterBranch, setFilterBranch] = useState('all');
    const [filterYear, setFilterYear] = useState('all');

    // Sample data (replace with actual API call later)
    const students = [
        { id: 1, rollNo: "21CS001", name: "John Doe", branch: "CSE", year: 3, cgpa: 8.5, mentor: "Dr. Smith" },
        { id: 2, rollNo: "21CS002", name: "Jane Smith", branch: "CSE", year: 3, cgpa: 9.0, mentor: "Dr. Johnson" },
        { id: 3, rollNo: "21EC001", name: "Mike Wilson", branch: "ECE", year: 2, cgpa: 8.7, mentor: "Dr. Brown" }
    ];

    const handleViewDetails = (studentId) => {
        navigate(`/dashboard/${studentId}`);
    };

    const filteredStudents = students.filter(student => 
        (filterBranch === 'all' || student.branch === filterBranch) &&
        (filterYear === 'all' || student.year === parseInt(filterYear)) &&
        (student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="view-students-hod">
            {/* ...existing filter controls... */}

            <table className="students-table">
                <thead>
                    <tr>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>Branch</th>
                        <th>Year</th>
                        <th>CGPA</th>
                        <th>Mentor</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map(student => (
                        <tr key={student.id}>
                            <td>{student.rollNo}</td>
                            <td>{student.name}</td>
                            <td>{student.branch}</td>
                            <td>{student.year}</td>
                            <td>{student.cgpa}</td>
                            <td>{student.mentor}</td>
                            <td>
                                <button 
                                    className="view-btn"
                                    onClick={() => handleViewDetails(student.id)}
                                >
                                    View Details
                                </button>
                                <button className="assign-btn">Assign Mentor</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewStudentsHOD;
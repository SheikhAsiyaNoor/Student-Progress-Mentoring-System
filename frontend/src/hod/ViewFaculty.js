// import React, { useEffect, useState } from "react";
// //import "./ViewFaculty.css";

// const ViewFaculty = () => {
//   const [faculty, setFaculty] = useState([]);
//   const [selectedFaculty, setSelectedFaculty] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:3000/api/hod/faculty", {
//       headers: { "Session-Id": localStorage.getItem("token") },
//     })
//       .then((res) => res.json())
//       .then((data) => setFaculty(data))
//       .catch((err) => console.error("Error fetching faculty:", err));
//   }, []);

//   const handleSelectFaculty = (facultyMember) => {
//     setSelectedFaculty(facultyMember);
//   };

//   return (
//     <div className="faculty-list-container">
//       <h2>Faculty List</h2>
//       <table className="faculty-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Department</th>
//             <th>Students Assigned</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {faculty.map((facultyMember) => (
//             <tr key={facultyMember.id}>
//               <td>{facultyMember.name}</td>
//               <td>{facultyMember.department}</td>
//               <td>{facultyMember.studentsAssigned}</td>
//               <td>
//                 <button onClick={() => handleSelectFaculty(facultyMember)}>View</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {selectedFaculty && (
//         <div className="faculty-details">
//           <h3>Faculty Details</h3>
//           <p><b>Name:</b> {selectedFaculty.name}</p>
//           <p><b>Department:</b> {selectedFaculty.department}</p>
//           <p><b>Students Assigned:</b> {selectedFaculty.studentsAssigned}</p>
//           <button onClick={() => window.location = `mailto:${selectedFaculty.email}`}>Email Faculty</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewFaculty;
import React, { useState } from 'react';
import './ViewFaculty.css';

const ViewFaculty = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [departmentFilter, setDepartmentFilter] = useState('all');
    const [selectedFaculty, setSelectedFaculty] = useState(null);

    // Sample data with assigned students
    const faculty = [
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            department: "CSE",
            designation: "Professor",
            email: "sarah@college.edu",
            students: [
                { id: 1, name: "John Doe", rollNo: "20CS101", year: 3 },
                { id: 2, name: "Jane Smith", rollNo: "20CS102", year: 3 }
            ]
        },
        {
            id: 2,
            name: "Dr. Michael Brown",
            department: "ECE",
            designation: "Associate Professor",
            email: "michael@college.edu",
            students: [
                { id: 3, name: "Alex Wilson", rollNo: "20EC101", year: 2 },
                { id: 4, name: "Emma Davis", rollNo: "20EC102", year: 2 }
            ]
        }
    ];

    const handleViewDetails = (faculty) => {
        setSelectedFaculty(selectedFaculty?.id === faculty.id ? null : faculty);
    };

    return (
        <div className="view-faculty-container">
            <h2>Faculty Management</h2>

            <div className="controls">
                <input 
                    type="text" 
                    placeholder="Search faculty..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select 
                    value={departmentFilter}
                    onChange={(e) => setDepartmentFilter(e.target.value)}
                >
                    <option value="all">All Departments</option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="MECH">MECH</option>
                </select>
            </div>

            <div className="faculty-grid">
                {faculty.map(member => (
                    <div key={member.id} className="faculty-card">
                        <h3>{member.name}</h3>
                        <p><strong>Department:</strong> {member.department}</p>
                        <p><strong>Designation:</strong> {member.designation}</p>
                        <p><strong>Email:</strong> {member.email}</p>
                        <p><strong>Students Assigned:</strong> {member.students.length}</p>
                        <div className="faculty-actions">
                            <button 
                                className="view-btn"
                                onClick={() => handleViewDetails(member)}
                            >
                                {selectedFaculty?.id === member.id ? 'Hide Details' : 'View Details'}
                            </button>
                        </div>
                        
                        {selectedFaculty?.id === member.id && (
                            <div className="students-list">
                                <h4>Assigned Students</h4>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Roll No</th>
                                            <th>Name</th>
                                            <th>Year</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {member.students.map(student => (
                                            <tr key={student.id}>
                                                <td>{student.rollNo}</td>
                                                <td>{student.name}</td>
                                                <td>{student.year}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewFaculty;
// import React, { useEffect, useState } from "react";

// const Profile = () => {
//   const [profile, setProfile] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const sessionId = localStorage.getItem("sessionId");
//       if (!sessionId) {
//         setError("No session found. Please log in.");
//         return;
//       }

//       try {
//         const response = await fetch("http://localhost:3000/api/student/profile", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             "session-id": sessionId, // ✅ Send session-id
//           },
//         });

//         if (!response.ok) throw new Error("Unauthorized or session expired");

//         const data = await response.json();
//         setProfile(data);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (error) return (
//     // <p>Name of the Student: Testing account</p><br></br><p>Student Birthdate: 01/02/05</p><br></br><p>Aadhaar Card No.: 123 456 789</p><br></br><p>Passport Details and Country: India</p><br></br><p>Blood Group: B-</p><br></br><p>Mobile No: 8765539211</p><br></br><p>Aadhaar Card No.: 123 456 789</p><br></br><p>Student Birthdate: 01/02/05</p><br></br><p>Aadhaar Card No.: 123 456 789</p><br></br><p>Aadhaar Card No.: 123 456 789</p><br></br><p>Student Birthdate: 01/02/05</p><br></br><p>Aadhaar Card No.: 123 456 789</p>
//     <p>
      
//       • Name of the Student: John Doe<br></br> 
//       • Date of Birth / Age: <br></br> 
//       • Aadhaar Card No. (Enclose a Photocopy): <br></br> 
//       • Passport Details and Country (For International Students): <br></br> 
//       • Blood Group:<br></br> 
//       • Mobile No: <br></br> 
//       • Institute Email ID: <br></br> 
//       • Year of Admission:<br></br> 
//       • Roll No: <br></br> 
//       • Program & Branch:  <br></br> 
//       • Hostel Room No.: <br></br> 
//       • Present Address - In case of Day Scholar:   (For International Students): <br></br> 
//       • Father’s Name: <br></br> 
//       • Occupation:  <br></br> 
//       • Mother’s Name:  <br></br> 
//       • Occupation:<br></br> 
//       • Brother / Sister Details: <br></br> 
//       • Name and Mobile No. of Parent / Guardian/Family Member for Emergency: <br></br> 
//       • Contact Address:<br></br>
//     </p>
//   );
//   if (!profile) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>Welcome, {profile.name}!</h2>
//       <p>Email: {profile.email}</p>
//       <p>Role: {profile.role}</p>
//     </div>
//   );
// };

// export default Profile;
import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="student-profile-container">
      <div className="profile-header">
        <div className="profile-banner">
          <div className="profile-avatar">
            <img src="https://via.placeholder.com/150" alt="Student" />
          </div>
          <h1>John Doe</h1>
          <p className="student-id">Roll No: 20CS101</p>
        </div>

        <div className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            Personal Details
          </button>
          <button 
            className={`tab-btn ${activeTab === 'academic' ? 'active' : ''}`}
            onClick={() => setActiveTab('academic')}
          >
            Academic Details
          </button>
          <button 
            className={`tab-btn ${activeTab === 'family' ? 'active' : ''}`}
            onClick={() => setActiveTab('family')}
          >
            Family Details
          </button>
        </div>
      </div>

      <div className="profile-content">
        {activeTab === 'personal' && (
          <div className="info-section">
            <div className="section-grid">
              <div className="info-card">
                <h3>Basic Information</h3>
                <div className="info-item">
                  <label>Date of Birth</label>
                  <p>01/02/2000</p>
                </div>
                <div className="info-item">
                  <label>Blood Group</label>
                  <p>B+</p>
                </div>
                <div className="info-item">
                  <label>Aadhaar Number</label>
                  <p>XXXX-XXXX-1234</p>
                </div>
              </div>

              <div className="info-card">
                <h3>Contact Information</h3>
                <div className="info-item">
                  <label>Mobile Number</label>
                  <p>8765539211</p>
                </div>
                <div className="info-item">
                  <label>Institute Email</label>
                  <p>john.doe@institute.edu</p>
                </div>
                <div className="info-item">
                  <label>Address</label>
                  <p>123 Student Housing, Campus Road</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'academic' && (
          <div className="info-section">
            <div className="section-grid">
              <div className="info-card">
                <h3>Academic Details</h3>
                <div className="info-item">
                  <label>Program & Branch</label>
                  <p>B.Tech - Computer Science</p>
                </div>
                <div className="info-item">
                  <label>Year of Admission</label>
                  <p>2020</p>
                </div>
                <div className="info-item">
                  <label>Current Semester</label>
                  <p>6th Semester</p>
                </div>
              </div>

              <div className="info-card">
                <h3>Accommodation</h3>
                <div className="info-item">
                  <label>Hostel Name</label>
                  <p>Block A</p>
                </div>
                <div className="info-item">
                  <label>Room Number</label>
                  <p>A-123</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'family' && (
          <div className="info-section">
            <div className="section-grid">
              <div className="info-card">
                <h3>Parent Details</h3>
                <div className="info-item">
                  <label>Father's Name</label>
                  <p>Mr. Robert Doe</p>
                </div>
                <div className="info-item">
                  <label>Father's Occupation</label>
                  <p>Business</p>
                </div>
                <div className="info-item">
                  <label>Mother's Name</label>
                  <p>Mrs. Sarah Doe</p>
                </div>
                <div className="info-item">
                  <label>Mother's Occupation</label>
                  <p>Teacher</p>
                </div>
              </div>

              <div className="info-card">
                <h3>Emergency Contact</h3>
                <div className="info-item">
                  <label>Primary Contact</label>
                  <p>+91 9876543210 (Father)</p>
                </div>
                <div className="info-item">
                  <label>Secondary Contact</label>
                  <p>+91 9876543211 (Mother)</p>
                </div>
                <div className="info-item">
                  <label>Address</label>
                  <p>456 Family Home, Parent Street</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
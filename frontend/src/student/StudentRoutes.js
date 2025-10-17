import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import StudentAcademics from "./StudentAcademics";
import InternshipProject from "./InternshipProject";
import MentorDetails from "./MentorDetails";
import ReportIssues from "./ReportIssues";
import ParentVisitSheet from './ParentVisitSheet';

const StudentRoutes = () => {
  return (
    <Routes>
      <Route path="profile" element={<Profile />} />
      <Route path="academics" element={<StudentAcademics />} />
      <Route path="internship" element={<InternshipProject />} />
      <Route path="mentor" element={<MentorDetails />} />
      <Route path="issues" element={<ReportIssues />} />
      <Route path="parent-visit" element={<ParentVisitSheet />} />
      <Route path="*" element={<Profile />} />
    </Routes>
  );
};

export default StudentRoutes;

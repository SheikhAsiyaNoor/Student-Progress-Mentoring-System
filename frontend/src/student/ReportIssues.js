import React from "react";
import "./ReportIssues.css";

const ReportIssues = () => {
  const handleEmail = () => {
    window.location.href = "mailto:sheikhnoornabil1234@gmail.com?subject=Issue Report";
  };

  return (
    <div className="page">
      <h2>Report Issues</h2>
      <p>Use this page to report any issues.</p>
      <button onClick={handleEmail}>Email Support</button>
    </div>
  );
};

export default ReportIssues;

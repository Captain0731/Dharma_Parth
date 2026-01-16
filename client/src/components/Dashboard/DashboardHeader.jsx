import React from "react";
import "./DashboardHeader.css";

const DashboardHeader = ({ title, subtitle }) => {
  const hrEmail = localStorage.getItem("hrEmail") || "hr@hirelogic.com";

  return (
    <div className="dashboard-header">
      <div className="header-content">
        <div>
          <h1 className="header-title">{title}</h1>
          {subtitle && <p className="header-subtitle">{subtitle}</p>}
        </div>
        <div className="header-user">
          <div className="user-avatar">
            {hrEmail.charAt(0).toUpperCase()}
          </div>
          <div className="user-info">
            <p className="user-name">HR Manager</p>
            <p className="user-email">{hrEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;


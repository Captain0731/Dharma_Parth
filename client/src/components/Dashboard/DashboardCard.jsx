import React from "react";
import "./DashboardCard.css";

const DashboardCard = ({ icon: IconComponent, title, value, subtitle, link, linkText }) => {
  return (
    <div className="dashboard-card">
      <div className="card-icon">
        {IconComponent && <IconComponent />}
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-value">{value}</p>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        {link && (
          <a href={link} className="card-link">
            {linkText || "View all"}
          </a>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;


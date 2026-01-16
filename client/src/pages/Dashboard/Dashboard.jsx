import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";
import DashboardCard from "../../components/Dashboard/DashboardCard";
import { ClipboardIcon, CalendarIcon, NotesIcon, BriefcaseIcon, BookmarkIcon, UserIcon } from "../../components/Dashboard/Icons";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("dashboard");

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("hrLoggedIn");
    if (!isLoggedIn) {
      navigate("/signin");
    }
  }, [navigate]);

  // Sample data
  const recentActivities = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      subtitle: "TechCorp Solutions - Bangalore",
      date: "2 hours ago",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      subtitle: "Design Studio Pro - Mumbai",
      date: "5 hours ago",
    },
    {
      id: 3,
      title: "Data Scientist",
      subtitle: "Analytics Hub - Hyderabad",
      date: "1 day ago",
    },
    {
      id: 4,
      title: "Backend Developer",
      subtitle: "CloudTech Inc - Pune",
      date: "2 days ago",
    },
    {
      id: 5,
      title: "Product Manager",
      subtitle: "InnovateNow - Delhi",
      date: "3 days ago",
    },
  ];

  const quickActions = [
    {
      id: 1,
      title: "Job Management",
      icon: BriefcaseIcon,
      description: "Manage job postings and applications",
    },
    {
      id: 2,
      title: "Candidate Bookmarks",
      icon: UserIcon,
      description: "View saved candidate profiles",
    },
    {
      id: 3,
      title: "Notes",
      icon: NotesIcon,
      description: "Create and manage notes",
    },
    {
      id: 4,
      title: "Calendar",
      icon: CalendarIcon,
      description: "View upcoming events and interviews",
    },
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return (
          <>
            {/* Summary Cards */}
            <div className="summary-cards-grid">
              <DashboardCard
                icon={ClipboardIcon}
                title="Total Applies"
                value="1,247"
                subtitle="Active"
              />
              <DashboardCard
                icon={CalendarIcon}
                title="Events"
                value="12"
                link="#"
                linkText="View all"
              />
              <DashboardCard
                icon={NotesIcon}
                title="Notes"
                value="8"
                subtitle="No notes yet"
              />
            </div>

            {/* Main Content Section */}
            <div className="dashboard-main-content">
              {/* Recent Activity */}
              <div className="content-card">
                <h2 className="content-card-title">Recent Activity</h2>
                <div className="activity-list">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="activity-item">
                      <div className="activity-content">
                        <h3 className="activity-title">{activity.title}</h3>
                        <p className="activity-subtitle">{activity.subtitle}</p>
                      </div>
                      <span className="activity-date">{activity.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="content-card">
                <h2 className="content-card-title">Quick Actions</h2>
                <div className="quick-actions-grid">
                  {quickActions.map((action) => {
                    const IconComponent = action.icon;
                    return (
                      <div key={action.id} className="quick-action-item">
                        <div className="action-icon">
                          <IconComponent />
                        </div>
                        <h3 className="action-title">{action.title}</h3>
                        <p className="action-description">{action.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        );

      case "calendar":
        return (
          <div className="content-card">
            <h2 className="content-card-title">Calendar</h2>
            <p className="empty-state">Calendar view coming soon...</p>
          </div>
        );

      case "bookmarks":
        return (
          <div className="content-card">
            <h2 className="content-card-title">Bookmarks</h2>
            <p className="empty-state">No bookmarks yet. Start saving candidates!</p>
          </div>
        );

      case "notes":
        return (
          <div className="content-card">
            <h2 className="content-card-title">Notes</h2>
            <p className="empty-state">No notes yet. Create your first note!</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="dashboard-main">
        <DashboardHeader
          title="Dashboard"
          subtitle="HR management overview"
        />
        <div className="dashboard-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


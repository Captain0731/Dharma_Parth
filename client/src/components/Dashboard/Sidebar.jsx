import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardIcon, CalendarIcon, BookmarkIcon, NotesIcon, LogoutIcon } from "./Icons";
import "./Sidebar.css";

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const navigate = useNavigate();

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: DashboardIcon },
    { id: "calendar", label: "Calendar", icon: CalendarIcon },
    { id: "bookmarks", label: "Bookmarks", icon: BookmarkIcon },
    { id: "notes", label: "Notes", icon: NotesIcon },
  ];

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
  };

  const handleLogout = () => {
    localStorage.removeItem("hrLoggedIn");
    localStorage.removeItem("hrEmail");
    navigate("/signin");
  };

  const handleLogoClick = () => {
    // Navigate to home page
    window.history.pushState({}, "", "/");
    window.dispatchEvent(new PopStateEvent("popstate"));
    navigate("/", { replace: true });
  };

  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-header">
        <div 
          className="sidebar-logo"
          onClick={handleLogoClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleLogoClick();
            }
          }}
          aria-label="Go to home page"
        >
          <h1>Hire<span>Logic.</span></h1>
        </div>
        <p className="sidebar-subtitle">HR Dashboard</p>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              className={`sidebar-menu-item ${activeMenu === item.id ? "active" : ""}`}
              onClick={() => handleMenuClick(item.id)}
            >
              <span className="menu-icon">
                <IconComponent />
              </span>
              <span className="menu-label">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <button className="sidebar-logout-btn" onClick={handleLogout}>
          <span className="menu-icon">
            <LogoutIcon />
          </span>
          <span className="menu-label">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;


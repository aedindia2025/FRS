import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { House, UserStar, UserRoundCog, BookText, UserLock, Settings } from "lucide-react";
import "./Header.css";

export default function Header() {
  const [megaOpen, setMegaOpen] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const profileRef = useRef(null);

  const menuItems = [
    { name: "Dashboard", icon: <House size={18} /> },
    {
      name: "Admin",
      icon: <UserStar size={18} />,
      subMenu: ["User Type", "Main User Screen", "User Creation", "User Permission"],
    },
    {
      name: "Master",
      icon: <UserRoundCog size={18} />,
      subMenu: [
        "Region Master",
        "District Master",
        "Fire Station Master",
        "Fire Case Master",
        "Rescue Type Master",
        "Mock Drill Type Master",
      ],
    },
    {
      name: "Entry Form",
      icon: <BookText size={18} />,
      subMenu: [
        "Region Master",
        "District Master",
        "Fire Station Master",
        "Fire Case Master",
        "Rescue Type Master",
        "Mock Drill Type Master",
      ],
    },
  ];

  // Close profile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      {/* Top Header */}
      <div className="top-header ">
        <div className="logo-text">
          <img src="/Emblem_of_Tamil_Nadu.svg" alt="Logo" className="logo" />
          <span>Tamil Nadu Fire & Rescue Service</span>
        </div>

        <div className="header-icons">
          <Settings className="icon" size={24} />

          {/* Profile/User */}
          <div
            ref={profileRef}
            className="profile-wrapper"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <UserLock size={24} />
            <span>Admin</span>

            {profileOpen && (
              <ul className="profile-menu">
                <li>Logout</li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Horizontal Menu */}
      <nav className="topbar-menu">
        <div className="container">
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={activeMenu === item.name ? "active" : ""}
                onClick={() => setActiveMenu(item.name)}
                onMouseEnter={() => setMegaOpen(index)}
                onMouseLeave={() => setMegaOpen(null)}
              >
                <span className="menu-icon">{item.icon}</span>
                {item.name}

                {item.subMenu && <FaChevronDown className="menu-arrow" />}

                {item.subMenu && megaOpen === index && (
                  <div className="mega-menu two-columns-rows">
                    {item.subMenu.map((subItem, i) => (
                      <div key={i} className="mega-item">
                        {subItem}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

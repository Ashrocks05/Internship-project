import React, { useState } from "react";
import "./App.css";
import "./UserPage.css";
import "./RolesPage.css";
import UserPage from "./UserPage";
import RolesPage from "./RolesPage";

const App = () => {
  const [isFloatVisible, setFloatVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    "Abhijeet Murari Tiwari",
    "Afsar Ali Shaikh",
    "Parag",
    "Pushpa Mam",
    "Pooja Mam",
    "Atul Mohammed",
    "Parija Kulkarni",
  ];

  const roles = [
    { user: "Abhijeet Murari Tiwari", role: "Admin" },
    { user: "Afsar Ali Shaikh", role: "Editor" },
    { user: "Parag", role: "Viewer" },
    { user: "Pushpa Mam", role: "Manager" },
    { user: "Pooja Mam", role: "Support" },
    { user: "Atul Mohammed", role: "Developer" },
    { user: "Parija Kulkarni", role: "Analyst" },
  ];

  const toggleFloat = () => {
    setFloatVisible(!isFloatVisible);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setCurrentPage("UsersPage");
  };

  const handleRoleClick = (role) => {
    setSelectedRole(role);
    setCurrentPage("RolesPage");
  };

  const goHome = () => {
    setCurrentPage(null);
  };

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (currentPage === "UsersPage") {
    return (
      <div>
        <div className="menu">
          <button className="home-button" onClick={goHome}>
            Home
          </button>
        </div>
        <UserPage user={selectedUser} />
      </div>
    );
  }

  if (currentPage === "RolesPage") {
    return (
      <div>
        <div className="menu">
          <button className="home-button" onClick={goHome}>
            Home
          </button>
        </div>
        <RolesPage role={selectedRole} />
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="menu">
        <button className="home-button" onClick={toggleFloat}>
          Home
        </button>
      </div>

      {isFloatVisible && (
        <div className="float-container">
          <div className="float-left">
            <input
              type="text"
              placeholder="Search Users"
              className="search-box"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul className="user-list">
              {filteredUsers.map((user, index) => (
                <li
                  key={index}
                  className="user-item"
                  onClick={() => handleUserClick(user)}
                >
                  {user}
                </li>
              ))}
            </ul>
          </div>

          <div className="float-right">
            <ul className="role-list">
              {roles.map((role, index) => (
                <li
                  key={index}
                  className="role-item"
                  onClick={() => handleRoleClick(role)}
                >
                  <strong>{role.user}</strong>: {role.role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

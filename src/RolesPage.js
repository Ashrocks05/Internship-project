import React from 'react';
import './RolesPage.css';

const RolesPage = () => {
  return (
    <div className="roles-page">
      {/* Column 1 */}
      <div className="column">
        <div className="role-details">
          <h2>Role Details</h2>
          <form>
            <div className="form-group">
              <label>Description:</label>
              <input type="text" placeholder="Enter description" />
            </div>
            <div className="form-group">
              <label>Deactivation Date:</label>
              <input type="date" />
            </div>
          </form>
        </div>
        <div className="screen-rights">
          <h2>Screen Rights</h2>
          <table>
            <thead>
              <tr>
                <th>Module</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Approval</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Practice</td>
                <td><input type="checkbox" /></td>
                <td><input type="checkbox" /></td>
                <td><input type="checkbox" /></td>
              </tr>
              <tr>
                <td>Reports</td>
                <td><input type="checkbox" /></td>
                <td><input type="checkbox" /></td>
                <td><input type="checkbox" /></td>
              </tr>
              <tr>
                <td>Dashboard</td>
                <td><input type="checkbox" /></td>
                <td><input type="checkbox" /></td>
                <td><input type="checkbox" /></td>
              </tr>
              <tr>
                <td>Users Management</td>
                <td><input type="checkbox" /></td>
                <td><input type="checkbox" /></td>
                <td><input type="checkbox" /></td>
              </tr>
              <tr>
                <td>Settings</td>
                <td><input type="checkbox" /></td>
                <td><input type="checkbox" /></td>
                <td><input type="checkbox" /></td>
              </tr>
              <tr>
                <td>Analytics</td>
                <td><input type="checkbox" /></td>
                <td><input type="checkbox" /></td>
                <td><input type="checkbox" /></td>
              </tr>
              <tr>
                <td>Notifications</td>
                <td><input type="checkbox" /></td>
                <td><input type="checkbox" /></td>
                <td><input type="checkbox" /></td>
              </tr>
              {/* Add more rows as necessary */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Column 2 */}
      <div className="column">
        <div className="data-rights">
          <h2>Data Rights</h2>
          <ul>
            <li>
              <input type="checkbox" /> Addcomede
            </li>
            <li>
              <input type="checkbox" /> 11
            </li>
            <li>
              <input type="checkbox" /> California Ops
            </li>
            <li>
              <input type="checkbox" /> Test Practice
            </li>
            <li>
              <input type="checkbox" /> Region Management
            </li>
            <li>
              <input type="checkbox" /> Employee Records
            </li>
            <li>
              <input type="checkbox" /> Financial Data
            </li>
            {/* Add more items as needed */}
          </ul>
        </div>
      </div>

      {/* Column 3 */}
      <div className="column">
        <div className="assigned-users">
          <h2>Assigned Users</h2>
          <div className="search-user">
            <input type="text" placeholder="Search User" />
          </div>
          <ul>
            <li>Abhijeet Murari Tiwari (tandon\infb014092)</li>
            <li>Afsar Ali Shaikh (tandon\infb075313)</li>
            <li>Atul Mohammed (tandon\infb045645)</li>
            <li>Parija Kulkarni (tandon\infb096272)</li>
            {/* Add more users */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RolesPage;

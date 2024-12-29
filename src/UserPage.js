import React from 'react';
import './UserPage.css';

const UsersPage = () => {
  return (
    <div className="users-page">
      <div className="column user-details">
        <div className="header">
          <h1>User Details</h1>
        </div>
        <form>
          <div className="form-group">
            <label>Find User:</label>
            <select>
              <option value="">Select a user</option>
            </select>
          </div>
          <div className="form-group">
            <label>User Name:</label>
            <input type="text" value="tandon\infb014092" readOnly />
          </div>
          <div className="form-group">
            <label>Full Name:</label>
            <input type="text" value="Abhijeet Murari Tiwari 1" readOnly />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value="abhijeet.tiwari@infinx.com" readOnly />
          </div>
          <div className="form-group">
            <label>Created on:</label>
            <input type="text" value="10/23/2023" readOnly />
          </div>
          <div className="form-group">
            <label>Last logged on:</label>
            <input type="text" value="11/25/2024" readOnly />
          </div>
          <div className="form-group">
            <label>Status:</label>
            <input type="text" value="Active" readOnly />
          </div>
        </form>
      </div>

      <div className="column permissions">
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
              <td><input type="checkbox" checked /></td>
              <td><input type="checkbox" checked /></td>
              <td><input type="checkbox" /></td>
            </tr>
            <tr>
              <td>Appointments</td>
              <td><input type="checkbox" /></td>
              <td><input type="checkbox" /></td>
              <td><input type="checkbox" /></td>
            </tr>
            <tr>
              <td>Billing</td>
              <td><input type="checkbox" checked /></td>
              <td><input type="checkbox" /></td>
              <td><input type="checkbox" checked /></td>
            </tr>
            <tr>
              <td>Reports</td>
              <td><input type="checkbox" /></td>
              <td><input type="checkbox" checked /></td>
              <td><input type="checkbox" /></td>
            </tr>
            <tr>
              <td>Admin</td>
              <td><input type="checkbox" checked /></td>
              <td><input type="checkbox" checked /></td>
              <td><input type="checkbox" checked /></td>
            </tr>
            <tr>
              <td>Payments</td>
              <td><input type="checkbox" checked /></td>
              <td><input type="checkbox" /></td>
              <td><input type="checkbox" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="column data-rights">
        <h2>Data Rights</h2>
        <ul>
          <li>
            <label>
              <input type="checkbox" />
              Addcomede
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              11
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Test
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              ATR testing add
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              California Ops
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UsersPage;



import React, { useEffect, useState } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Attempt to get data and ensure it's an array
    const storedData = localStorage.getItem("users");
    const storedUsers = storedData ? JSON.parse(storedData) : [];
    setUsers(storedUsers);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registered Users</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Department</th>
            <th>Semester</th>
            <th>RollNumber</th>
            <th>Year</th>
            <th>Section</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>{user.department}</td>
                <td>{user.semester}</td>
                <td>{user.rollnumber}</td>
                <td>{user.year}</td>
                <td>{user.section}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No users registered yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
import React, { useState } from "react";

const Registration = () => {

  const [departmentData, setDepartmentData] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    department: "",
    semester: "",
    rollnumber: "",
    year: "",
    section: "",

  });

  const handleChange = (e) => {
    setDepartmentData({
      ...departmentData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    existingUsers.push(departmentData);

    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("User Registered Successfully");

    setDepartmentData({
      name: "",
      username: "",
      password: "",
      gender: "",
      department: "",
      semester: "",
      rollnumber: "",
      year: "",
    section: "",

    });
  };

  return (
    <div>
      <h2>Department Registration</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={departmentData.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={departmentData.username}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={departmentData.password}
          onChange={handleChange}
          required
        />

        <br /><br />


        <input
          type="email"
          name="email"
          placeholder="Email"
          value={departmentData.email}
          onChange={handleChange}
          required
        />


        <br /><br />
        <select
          name="department"
          value={departmentData.department}
          onChange={handleChange}
          required
        >
          <option value="">Select Department</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Civil">Civil</option>
        </select>

        <br /><br />
        <input
          type="number"
          name="semester"
          placeholder="Semester"
          value={departmentData.semester}
          onChange={handleChange}
          required
        />
        <br/>
<input
  type="text"
  name="rollnumber"
  placeholder="Roll Number"
  value={departmentData.rollnumber}
  onChange={handleChange}
  required
/>

<br /><br />
<select
  name="year"
  value={departmentData.year}
  onChange={handleChange}
  required
>
  <option value="">Select Year</option>
  <option value="1st Year">1st Year</option>
  <option value="2nd Year">2nd Year</option>
  <option value="3rd Year">3rd Year</option>
  <option value="4th Year">4th Year</option>
</select>

<br /><br />

<select
  name="section"
  value={departmentData.section}
  onChange={handleChange}
  required
>
  <option value="">Select Section</option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
</select>

<br /><br />

        <button type="submit">Register</button>

      </form>
    </div>
  );
};

export default Registration;
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 8000;

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());

const dataPath = "./data/data.json";

// Read and parse JSON data
const getEmployeeData = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};

const getOrganizationData = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};

// Write JSON data
const saveEmployeeData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(dataPath, stringifyData);
};

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to employees backend",
  });
});

// Route to get list of all employees
app.get("/employees", (req, res) => {
  const data = getEmployeeData();
  const activeUsers = data.employees.filter((user) => user.isActive === true);
  res.send({
    success: true,
    data: activeUsers,
  });
});

// Route to get employee details by Id
app.get("/employees/:id", (req, res) => {
  const data = getEmployeeData();
  const employee = data.employees.find(
    (emp) => emp.id === parseInt(req.params.id)
  );
  if (employee && employee.isActive === true) {
    res.send({
      success: true,
      data: employee,
    });
  } else {
    res.status(404).send({
      success: false,
      message: "Employee not found",
    });
  }
});

// Route to update employee data
app.put("/employees/:id", (req, res) => {
  const { name, role, isActive, DOB, address } = req.body;
  const data = getEmployeeData();
  const index = data.employees.findIndex(
    (emp) => emp.id === parseInt(req.params.id)
  );
  if (index !== -1) {
    const updatedEmployee = {
      ...data.employees[index],
      name,
      role,
      isActive,
      DOB,
      address,
    };
    data.employees[index] = updatedEmployee;
    saveEmployeeData(data);
    res.send({
      success: true,
      message: "Employee updated successfully",
    });
  } else {
    res.status(404).send({
      success: false,
      message: "Employee not found",
    });
  }
});

// Route to delete employee data
app.delete("/employees/:id", (req, res) => {
  const data = getEmployeeData();
  const index = data.employees.findIndex(
    (emp) => emp.id === parseInt(req.params.id)
  );
  console.log(req.params.id);
  console.log(index);
  if (index !== -1) {
    data.employees[index].isActive = false; // Soft delete
    saveEmployeeData(data);
    res.send({
      success: true,
      message: "Employee deleted successfully",
    });
  } else {
    res.status(404).send({
      success: false,
      message: "Employee not found",
    });
  }
});

//Route to get organization data
app.get("/organization", (req, res) => {
  const data = getOrganizationData();
  res.send({
    success: true,
    data: { ...data.organizationInfo },
  });
});

// Route to edit organization
app.put("/organization", (req, res) => {
  const { name, address, phoneNumber, headquarter, founder, date } = req.body;
  const data = getOrganizationData();
  data.organizationInfo = {
    name,
    address,
    phoneNumber,
    headquarter,
    founder,
    date,
  };
  saveEmployeeData(data);
  res.send({
    success: true,
    message: "Organization info updated successfully",
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

import React from "react";
import { Table } from "react-bootstrap";

const EmployeeList = () => {
  const employees = [
    {
      id: 1,
      firstName: "Test",
      lastName: "One",
      email: "test1@test.com",
    },
    {
      id: 2,
      firstName: "Test",
      lastName: "Two",
      email: "test2@test.com",
    },
    {
      id: 3,
      firstName: "Test",
      lastName: "Three",
      email: "test3@test.com",
    },
    {
      id: 4,
      firstName: "Test",
      lastName: "Four",
      email: "test4@test.com",
    },
    {
      id: 5,
      firstName: "Test",
      lastName: "Five",
      email: "test5@test.com",
    },
    {
      id: 6,
      firstName: "User",
      lastName: "Five",
      email: "user5@test.com",
    },
    {
      id: 7,
      firstName: "User",
      lastName: "Four",
      email: "user4@mail.com",
    },
    {
      id: 8,
      firstName: "User",
      lastName: "Three",
      email: "user3@mail.com",
    },
    {
      id: 9,
      firstName: "User",
      lastName: "Two",
      email: "user2@mail.com",
    },
    {
      id: 10,
      firstName: "User",
      lastName: "One",
      email: "user@mail.com",
    },
  ];
  return (
    <div className="mt-2">
      <h1 className="text-center">Employees List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <td>{index + 1}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button className="btn btn-primary btn-sm mx-2">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeList;

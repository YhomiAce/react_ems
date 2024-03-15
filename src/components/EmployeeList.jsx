import React from "react";
import { Table } from "react-bootstrap";
import useEmployee from "../hooks/useEmployee";

const EmployeeList = () => {
  const { data, isFetching, isError, error } = useEmployee();
 
  console.log({ data, error });
  if (isFetching) {
    return <span>Loading....</span>;
  }
  if (isError) {
    return <span>An Error Occured</span>;
  }
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
          {data && !isError && data.map((employee, index) => (
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

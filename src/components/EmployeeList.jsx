import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import useEmployee from "../hooks/useEmployee";
import FormModal from "./FormModal";
import AddEmployee from "./AddEmployee";
import useEmployeeAction from "../hooks/useEmployeeAction";
import SpinnerComponent from "./Spinner";
import { toast } from "react-toastify";

const EmployeeList = () => {
  const { data, isFetching, isError, error } = useEmployee();
  const mutation = useEmployeeAction();
  const [showModal, setShowModal] = useState(false);

  const onClose = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  useEffect(() => {
    if(mutation.isError && mutation.error){
      console.log({error: mutation.error});
      toast.error(mutation.error.response.data.message);
    }
  }, [mutation.error, mutation.isError]);

  useEffect(() => {
    if(mutation.isSuccess && mutation.data){
      console.log({data: mutation.data});
      setShowModal(false);
      toast.success("Employee Data saved succesfuly");
    }
  }, [mutation.data, mutation.isSuccess]);

  console.log({ data, error });
  const submit = (values) => {
    console.log(values);
   mutation.mutate(values);
   
  };
  if (isFetching) {
    return <SpinnerComponent />;
  }
  if (isError) {
    return <span>An Error Occured</span>;
  }

  return (
    <Container className="mt-2">
      <h1 className="text-center">Employees List</h1>
      <Button
        variant="primary"
        className="mb-2 mt-2 float-end"
        onClick={openModal}
      >
        Add Employee
      </Button>
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
          {data &&
            !isError &&
            data.map((employee, index) => (
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
      <FormModal
        showModal={showModal}
        onClose={onClose}
        ok={"OK"}
        title={"Create New Employee"}
      >
        <AddEmployee submit={submit} isLoading={mutation.isPending} />
      </FormModal>
    </Container>
  );
};

export default EmployeeList;

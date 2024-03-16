import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import useEmployee from "../hooks/useEmployee";
import FormModal from "./FormModal";
import AddEmployee from "./AddEmployee";
import useEmployeeAction from "../hooks/useCreateEmployee";
import SpinnerComponent from "./Spinner";
import { toast } from "react-toastify";
import { FaUserEdit, FaTrash } from "react-icons/fa";
import DeleteConfirmation from "./DeleteConfirmation";
import useDeleteEmployee from "../hooks/useDeleteEmployee";

const EmployeeList = () => {
  const { data, isFetching, isError, error } = useEmployee();
  const mutation = useEmployeeAction();
  const deleteMutation = useDeleteEmployee()
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [employeeId, setEmployeeId] = useState();

  const onClose = () => setShowModal(false);
  const openModal = () => setShowModal(true);
  const onCloseDelete = () => setShowDelete(false);
  const openDeleteModal = (id) => {
    setEmployeeId(id);
    setShowDelete(true);
  };

  useEffect(() => {
    if (mutation.isError && mutation.error) {
      console.log({ error: mutation.error });
      toast.error(mutation.error.response.data.message);
    }
  }, [mutation.error, mutation.isError]);

  useEffect(() => {
    if (mutation.isSuccess && mutation.data) {
      console.log({ data: mutation.data });
      setShowModal(false);
      toast.success("Employee Data saved succesfuly");
    }
  }, [mutation.data, mutation.isSuccess]);

  useEffect(() => {
    if (deleteMutation.isSuccess && deleteMutation.data) {
      console.log({ data: deleteMutation.data });
      setShowDelete(false);
      toast.success(deleteMutation.data);
    }
  }, [deleteMutation.data, deleteMutation.isSuccess]);

  console.log({isSuccess: deleteMutation.isSuccess, data: deleteMutation.data});

  const submit = (values) => {
    mutation.mutate(values);
  };

  const deleteEmployee = () => {
    console.log('delete...', employeeId);
    deleteMutation.mutate(employeeId);
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
                  <FaUserEdit
                    className="text-primary"
                    role="button"
                    onClick={openModal}
                  />
                  <FaTrash
                    className="mx-3 text-danger"
                    role="button"
                    onClick={() =>openDeleteModal(employee.id)}
                  />
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
      <DeleteConfirmation
        show={showDelete}
        handleClose={onCloseDelete}
        handleConfirm={deleteEmployee}
      />
    </Container>
  );
};

export default EmployeeList;

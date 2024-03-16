import React, { useState } from "react";
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
import { useUpdateEmployee } from "../hooks/useUpdateEmployee";

const EmployeeList = () => {
  const { data, isFetching, isError, error } = useEmployee();
  const mutation = useEmployeeAction();
  const deleteMutation = useDeleteEmployee();
  const updateMutation = useUpdateEmployee();
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [employeeId, setEmployeeId] = useState();
  const [employee, setEmployee] = useState(null);

  const onClose = () => {
    setEmployee(null);
    setShowModal(false);
  };
  const openModal = () => setShowModal(true);
  const openModalInEditMode = (employee) => {
    setEmployee(employee);
    setShowModal(true);
  };
  const onCloseDelete = () => setShowDelete(false);
  const openDeleteModal = (id) => {
    setEmployeeId(id);
    setShowDelete(true);
  };

  const submit = (values) => {
    console.log({ values });
    if (employee) {
      updateMutation.mutate(
        { id: employee.id, body: values },
        {
          onSuccess: () => {
            setEmployee(null);
            setShowModal(false);
            toast.success("Employee udpated succesfuly");
          },
        }
      );
    } else {
      mutation.mutate(values, {
        onSuccess: () => {
          setEmployee(null);
          setShowModal(false);
          toast.success("Employee created succesfuly");
        },
        onError: (error) => {
          console.log({ error });
          toast.error(error.response.data.message);
        },
      });
    }
  };

  const deleteEmployee = () => {
    console.log("delete...", employeeId);
    deleteMutation.mutate(employeeId, {
      onSuccess: (response) => {
        setShowDelete(false);
        toast.success(response);
      },
    });
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
                    onClick={() => openModalInEditMode(employee)}
                  />
                  <FaTrash
                    className="mx-3 text-danger"
                    role="button"
                    onClick={() => openDeleteModal(employee.id)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <FormModal
        showModal={showModal}
        onClose={onClose}
        title={"Create New Employee"}
      >
        <AddEmployee
          submit={submit}
          isLoading={mutation.isPending}
          employee={employee}
        />
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

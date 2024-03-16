import React from "react";
import { Button, Modal } from "react-bootstrap";

const FormModal = ({ title, children, showModal, onClose }) => {
  return (
    <div>
      <Modal
        show={showModal}
        onHide={onClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          {/* <Button variant="primary">{ok}</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FormModal;

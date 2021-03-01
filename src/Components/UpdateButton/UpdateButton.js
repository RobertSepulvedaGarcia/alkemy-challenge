import React, { useState } from "react";
import ModalForUpdate from "../ModalForUpdate/ModalForUpdate";
import { Button } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
const UpdateButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <AiFillEdit />
        Editar
      </Button>
      <ModalForUpdate showing={show} hiding={handleClose} />
    </>
  );
};

export default UpdateButton;

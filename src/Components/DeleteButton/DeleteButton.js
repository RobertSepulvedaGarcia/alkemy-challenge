import React from "react";
import { Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
const DeleteButton = () => {
  return (
    <>
      <Button variant="danger">
        <AiFillDelete />
        Eliminar
      </Button>
    </>
  );
};

export default DeleteButton;

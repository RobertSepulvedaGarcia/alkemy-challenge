import React from "react";
import { Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { deleteRegister } from "../../api/delete/delete";
const DeleteButton = ({ id }) => {
  return (
    <>
      <Button variant="danger" onClick={() => deleteRegister(id)}>
        <AiFillDelete />
        Eliminar
      </Button>
    </>
  );
};

export default DeleteButton;

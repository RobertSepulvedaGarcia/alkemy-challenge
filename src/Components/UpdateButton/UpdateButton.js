import React from "react";
import { Button } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
const UpdateButton = () => {
  return (
    <>
      <Button variant="primary">
        <AiFillEdit />
        Editar
      </Button>
    </>
  );
};

export default UpdateButton;

import React, { useState } from "react";
import ModalForUpdate from "../ModalForUpdate/ModalForUpdate";

import { Button } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
const UpdateButton = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log(
      "El error que ven a continuación se debe a un error de compatibilidad entre react-bootstrap y el modo estricto de react"
    );
    setShow(true);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <AiFillEdit />
        Editar{" "}
      </Button>{" "}
      <ModalForUpdate showing={show} hiding={handleClose} data={data} />{" "}
    </>
  );
};

export default UpdateButton;

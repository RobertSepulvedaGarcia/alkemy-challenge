import React from "react";
import { Modal } from "react-bootstrap";
import FormularyUpdate from "../../Components/Form/FormularyUpdate";
import "./ModalForUpdate.css";
const { Title, Header, Body } = Modal;

const ModalForUpdate = ({ showing, hiding, data }) => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showing}
      onHide={hiding}
    >
      <Header>
        <Title> Editar </Title>
      </Header>
      <Body>
        <FormularyUpdate data={data} />
      </Body>
    </Modal>
  );
};

export default ModalForUpdate;

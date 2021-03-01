import React, { useState } from "react";
import { Modal, Form, Button, Col } from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";
import { AiFillSave } from "react-icons/ai";
import es from "date-fns/locale/es";
import "./ModalForUpdate.css";
const { Title, Header, Body, Footer } = Modal;
const { Group, Control, Label } = Form;

const ModalForUpdate = ({ showing, hiding }) => {
  const [startDate, setStartDate] = useState(new Date());
  registerLocale("es", es);
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
        <Form>
          <Group>
            <Label> Concepto </Label>
            <Control type="text" placeholder="Describa el concepto" />
          </Group>
          <Group>
            <Label> Monto </Label>
            <Control type="text" placeholder="Describa el monto" />
          </Group>
          <Group>
            <Label> Fecha </Label>
            <Col style={{ padding: 0 }}>
              <DatePicker
                className="datePicker-modal"
                locale="es"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </Col>
          </Group>
        </Form>
      </Body>
      <Footer>
        <Button onClick={hiding}>
          <AiFillSave />
          Guardar Cambios
        </Button>
      </Footer>
    </Modal>
  );
};

export default ModalForUpdate;

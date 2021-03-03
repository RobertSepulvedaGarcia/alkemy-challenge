import React, { useState } from "react";
import { Form, Button, Container, Col } from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";
import { AiFillSave } from "react-icons/ai";
import es from "date-fns/locale/es";

import "./Formulary.css";
const { Group, Control, Label } = Form;
const Formulary = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);

    console.log(event.target[2].value);
  };

  registerLocale("es", es);
  return (
    <Container fluid className="containerForm">
      <h2 className="h2"> Nuevo Registro </h2>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Group>
          <Label> Concepto </Label>
          <Control required type="text" placeholder="Describa el concepto" />
        </Group>

        <Group>
          <Label> Monto </Label>
          <Control required type="text" placeholder="Describa el monto" />
        </Group>

        <Group>
          <Label> Fecha </Label>
          <Col style={{ padding: 0 }}>
            <DatePicker
              className="datePicker"
              dateFormat="yyyy-MM-dd"
              locale="es"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </Col>
        </Group>

        <Group>
          <Label> Tipo de operacion </Label>
          <Control required as="select" custom>
            <option> {null} </option>
            <option> Ingreso </option>
            <option> Egreso </option>
          </Control>
        </Group>

        <Button variant="primary" type="submit">
          <AiFillSave />
          Agregar
        </Button>
      </Form>
    </Container>
  );
};

export default Formulary;

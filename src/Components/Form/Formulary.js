import React, { useState } from "react";
import { Form, Button, Container, Col } from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";
import { AiFillSave } from "react-icons/ai";
import es from "date-fns/locale/es";

import "./Formulary.css";
const { Group, Control, Label } = Form;
const Formulary = () => {
  const [startDate, setStartDate] = useState(new Date());
  registerLocale("es", es);
  return (
    <Container fluid className="containerForm">
      <h2 className="h2"> Nuevo Registro </h2>
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
          <Control as="select" custom>
            <option> Ingreso </option> <option> Egreso </option>
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

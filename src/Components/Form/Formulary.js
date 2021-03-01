import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";

import "./Formulary.css";
const { Group, Control } = Form;
const Formulary = () => {
  const [startDate, setStartDate] = useState(new Date());
  registerLocale("es", es);
  return (
    <Container fluid className="containerForm">
      <h2 className="h2">Nuevo Registro</h2>
      <Form>
        <Group>
          <Control type="text" placeholder="Concepto" />
        </Group>
        <Group>
          <Control type="text" placeholder="Monto" />
        </Group>
        <Group>
          <DatePicker
            locale="es"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </Group>

        <Group>
          <Control as="select" custom>
            <option>Ingreso</option>
            <option>Egreso</option>
          </Control>
        </Group>

        <Button variant="primary" type="submit">
          Agregar
        </Button>
      </Form>
    </Container>
  );
};

export default Formulary;

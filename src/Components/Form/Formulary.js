import React, { useState } from "react";
import { Form, Button, Container, Col } from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";

import dateFormat from "dateformat";
import { newRegister } from "../../api/register/index";
import { AiFillSave } from "react-icons/ai";
import es from "date-fns/locale/es";

import "./Formulary.css";
const { Group, Control, Label } = Form;
const Formulary = () => {
  const [state, setState] = useState({
    concept: "",
    mount: 0,
    date: new Date(),
    operationType: "",
  });

  const { concept, mount, date, operationType } = state;

  const handleChange = ({ target: { name, value } }) => {
    let aux = { ...state };

    aux[name] = value;

    setState(aux);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { concept, mount, date, operationType };
      await newRegister(data);
      console.log("guardado con exito");
    } catch (error) {
      console.log(error);
    }
  };

  registerLocale("es", es);
  return (
    <Container fluid className="containerForm">
      <h2 className="h2"> Nuevo Registro </h2>

      <Form onSubmit={handleSubmit}>
        <Group>
          <Label> Concepto </Label>
          <Control
            name="concept"
            required
            type="text"
            onChange={handleChange}
            placeholder="Describa el concepto"
          />
        </Group>

        <Group>
          <Label> Monto </Label>
          <Control
            name="mount"
            required
            type="text"
            onChange={handleChange}
            placeholder="Describa el monto"
          />
        </Group>

        <Group>
          <Label> Fecha </Label>
          <Col style={{ padding: 0 }}>
            <DatePicker
              name="date"
              className="datePicker"
              dateFormat="dd/MM/yyyy"
              locale="es"
              selected={date}
              onChange={(e) => {
                const date = dateFormat(e, "isoDateTime");

                const valor = { target: { name: "date", value: date } };
                handleChange(valor);
              }}
            />
          </Col>
        </Group>

        <Group>
          <Label> Tipo de operacion </Label>
          <Control
            onChange={handleChange}
            name="operationType"
            required
            as="select"
            custom
          >
            <option> {null} </option>
            <option value="Ingreso"> Ingreso </option>
            <option value="Egreso"> Egreso </option>
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

import React, { useState } from "react";
import { Form, Button, Container, Col } from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";
import { newRegister } from "../../api/register/index";
import { AiFillSave } from "react-icons/ai";
import es from "date-fns/locale/es";
import "./Formulary.css";
const { Group, Control, Label } = Form;
const Formulary = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [state, setState] = useState({
    concept: "",
    mount: 0,
    date: new Date().toISOString().split("T", 1)[0],
    operationType: "",
  });

  const { concept, mount, date, operationType } = state;

  const handleChange = ({ target: { name, value } }) => {
    if (name === "mount") {
      value = Number(value);
    }

    let aux = { ...state };

    aux[name] = value;

    setState(aux);
  };

  const handleDate = (d) => {
    let fecha = d.toISOString().split("T", 1)[0];
    let aux = { ...state };
    aux.date = fecha;

    setStartDate(d);
    setState(aux);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = { concept, mount, date, operationType };
      console.log(`data antes del fetch:${data}`);
      await newRegister(data);
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
              selected={startDate}
              onChange={handleDate}
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
            <option> {null} </option> <option value="Ingreso"> Ingreso </option>
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

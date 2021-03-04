import React, { useState, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { Form, Button, Col } from "react-bootstrap";
import { AiFillSave } from "react-icons/ai";
import { updateRegister } from "../../api/put/update";
import es from "date-fns/locale/es";
const { Group, Control, Label } = Form;

const FormularyUpdate = ({ data }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [state, setState] = useState({
    concept: "",
    mount: 0,
    date: new Date().toISOString().split("T", 1)[0],
  });
  const { concept, mount, date } = state;

  useEffect(() => {
    const { Concept, Mount, DATE } = data;
    setStartDate(new Date(DATE));
    setState({ concept: Concept, mount: Mount, date: DATE });
  }, [data]);

  const handleChange = ({ target: { name, value } }) => {
    if (name === "mount") {
      value = Number(value);
    }

    let aux = { ...state };

    aux[name] = value;

    setState(aux);
  };

  const handleDate = (d) => {
    let fecha = d.toISOString().split("T", -1)[0];
    console.log(fecha);
    let aux = { ...state };
    aux.date = fecha;

    setStartDate(d);
    setState(aux);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const body = { concept, mount, date };
      console.log(body);
      await updateRegister(body, data.ID);
    } catch (error) {
      console.log(error);
    }
  };

  registerLocale("es", es);
  return (
    <Form onSubmit={handleSubmit}>
      <Group>
        <Label> Concepto </Label>{" "}
        <Control
          name="concept"
          required
          onChange={handleChange}
          value={concept}
          type="text"
          placeholder="Describa el concepto"
        />
      </Group>{" "}
      <Group>
        <Label> Monto </Label>{" "}
        <Control
          name="mount"
          required
          value={mount}
          onChange={handleChange}
          type="text"
          placeholder="Describa el monto"
        />
      </Group>{" "}
      <Group>
        <Label> Fecha </Label>{" "}
        <Col style={{ padding: 0 }}>
          <DatePicker
            className="datePicker-modal"
            name="date"
            dateFormat="dd/MM/yyyy"
            locale="es"
            selected={startDate}
            onChange={handleDate}
          />
        </Col>
      </Group>
      <Button type="submit">
        <AiFillSave />
        Guardar Cambios
      </Button>
    </Form>
  );
};

export default FormularyUpdate;

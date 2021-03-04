import React from "react";
import NavButton from "../../NavButton/NavButton";
import TablePageButton from "../../TablePageButton/TablePageButton";
import "./Navbar.css";
import { Container, Row, Col } from "react-bootstrap";
const Navbar = ({ children, path, title, bClass }) => {
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col className="column" xs={12}>
          <NavButton path={path} title={title} />

          <TablePageButton
            path="/table"
            title="Tabla de operaciones"
            bClass={bClass}
          />
        </Col>
        <Col className="column2" xs={12} sm={12} md={12} lg={12}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;

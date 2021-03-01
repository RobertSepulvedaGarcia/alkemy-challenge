import React from "react";
import NavButton from "../../NavButton/NavButton";
import "./Navbar.css";
import { Container, Row, Col } from "react-bootstrap";
const Navbar = ({ children, path, title }) => {
  return (
    <Container className="cont" fluid>
      <Row className="row justify-content-md-center">
        <Col className="column" xs={12}>
          <NavButton path={path} title={title} />
        </Col>
        <Col className="column2" xs={8}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;

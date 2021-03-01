import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const NavButton = ({ path, title }) => {
  return (
    <>
      <Link to={path}>
        <Button variant="success">{title}</Button>
      </Link>
    </>
  );
};

export default NavButton;

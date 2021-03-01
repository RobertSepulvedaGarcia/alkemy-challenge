import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./TablePageButton.css";
const TablePageButton = ({ path, title, bClass }) => {
  return (
    <>
      <Link to={path}>
        <Button variant="success" className={`${bClass} button`}>
          {title}
        </Button>
      </Link>
    </>
  );
};

export default TablePageButton;

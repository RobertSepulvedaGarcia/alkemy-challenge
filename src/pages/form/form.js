import React from "react";
import Navbar from "../../Components/Layout/Navbar/Navbar";
import Formulary from "../../Components/Form/Formulary";
const form = () => {
  return (
    <Navbar path="/" title="ir a Home" bClass="d-none">
      <Formulary />
    </Navbar>
  );
};

export default form;

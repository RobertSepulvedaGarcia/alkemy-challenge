import React from "react";
import { Table } from "react-bootstrap";
import { data_mounts } from "../../utils/dataTable";
import Navbar from "../../Components/Layout/Navbar/Navbar";
import "./home.css";
const home = () => {
  const { columns, rows } = data_mounts;

  return (
    <Navbar>
      <p className="display-4">Los Ultimos 10</p>
      <Table
        style={{ textAlign: "center" }}
        responsive
        striped
        bordered
        hover
        size="sm"
        variant="dark"
      >
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.reason}</td>
              <td>{row.type}</td>
              <td>{row.money}</td>
              <td>{row.update}</td>
              <td>{row.delete}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p>Total Ingresos:</p>
      <p>Total Egresos:</p>
      <p className="display-3" style={{ color: "skyblue" }}>
        Total Balance:
      </p>
    </Navbar>
  );
};

export default home;

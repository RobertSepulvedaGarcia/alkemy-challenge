import React from "react";
import Navbar from "../../Components/Layout/Navbar/Navbar";
import { Table } from "react-bootstrap";

import { data_operations } from "../../utils/dataTable";
const tableOperationsList = () => {
  const { columns, rows } = data_operations;

  return (
    <Navbar path="/" title="ir a Home" bClass="d-none">
      <p className="display-4">Tabla de operaciones</p>
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
          {rows.map((row, index) => {
            const { Delete, Update } = row;
            return (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.reason}</td>
                <td>{row.type}</td>
                <td>{row.money}</td>
                <td>{row.date}</td>
                <td>
                  <Update />
                </td>
                <td>
                  <Delete />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Navbar>
  );
};

export default tableOperationsList;

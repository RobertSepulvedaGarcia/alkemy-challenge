import React from "react";
import { data_operations } from "../../utils/dataTable";
import useGetRegister from "../../hooks/useGetRegister";
import { dateFormat } from "../../utils/dateFormatter";
import Navbar from "../../Components/Layout/Navbar/Navbar";
import { Table } from "react-bootstrap";
import Delete from "../../Components/DeleteButton/DeleteButton";
import Update from "../../Components/UpdateButton/UpdateButton";
const TableOperationsList = () => {
  const { columns } = data_operations;

  const { data } = useGetRegister("http://localhost:3001/maintainer");

  return (
    <Navbar path="/" title="ir a Home" bClass="d-none">
      <p className="display-4"> Tabla de operaciones </p>
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
              <th key={index}> {column.label} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={index}>
                <td> {row.ID} </td>
                <td> {row.Concept} </td>
                <td> {row.OperationType} </td>
                <td> {row.Mount} </td>
                <td> {dateFormat(new Date(row.DATE))} </td>
                <td>
                  <Delete />
                </td>
                <td>
                  <Update />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Navbar>
  );
};

export default TableOperationsList;

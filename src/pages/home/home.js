import React from "react";
import { Table } from "react-bootstrap";
import { data_mounts } from "../../utils/dataTable";
import { dateFormat } from "../../utils/dateFormatter";
import useGetRegister from "../../hooks/useGetRegister";
import Navbar from "../../Components/Layout/Navbar/Navbar";
import "./home.css";
const Home = () => {
  const { columns } = data_mounts;

  const { data } = useGetRegister("http://localhost:3001");

  return (
    <Navbar path="/form" title="Nuevo Registro">
      <p className="display-4"> Los Ultimos 10 Registros </p>
      <Table
        style={{ textAlign: "center" }}
        responsive
        striped
        bordered
        hover
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
          {data.map((row, index) => (
            <tr key={index}>
              <td> {row.ID} </td>
              <td> {row.Concept} </td>
              <td> {row.OperationType} </td>
              <td> {row.Mount} </td>
              <td> {dateFormat(new Date(row.DATE))} </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p> Total Ingresos: NaN </p> <p> Total Egresos: NaN </p>
      <p className="display-3" style={{ color: "skyblue" }}>
        Total Balance: NaN
      </p>
    </Navbar>
  );
};

export default Home;

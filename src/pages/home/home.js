import React from "react";
import { Table } from "react-bootstrap";
import { data_mounts } from "../../utils/dataTable";
import { dateFormat } from "../../utils/dateFormatter";
import useGetRegister from "../../hooks/useGetRegister";
import { returnTotals } from "../../utils/returnTotals";
import { mountFormatter } from "../../utils/mountFormatter";
import Navbar from "../../Components/Layout/Navbar/Navbar";
import "./home.css";
const Home = (props) => {
  const { columns } = data_mounts;

  const { data } = useGetRegister("http://localhost:3001");
  const allData = useGetRegister("http://localhost:3001/maintainer");

  const { totalIncomes, totalExpences, totalBalance } = returnTotals(allData);
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
              <td> ${mountFormatter(row.Mount)} </td>
              <td> {dateFormat(new Date(row.DATE))} </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p style={{ fontWeight: "bold" }}>
        Total Ingresos: ${mountFormatter(totalIncomes)}
      </p>
      <p style={{ fontWeight: "bold" }}>
        Total Egresos: ${mountFormatter(totalExpences)}{" "}
      </p>
      <p
        className="display-3"
        style={totalBalance <= 0 ? { color: "red" } : { color: "skyblue" }}
      >
        Total Balance: ${mountFormatter(totalBalance)}
      </p>
    </Navbar>
  );
};

export default Home;

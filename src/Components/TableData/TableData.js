import React, { useState } from "react";
import Button from "../Button/Button";

const TableData = (props) => {
  const myInput = localStorage.getItem("inputValue");
  let formDetails;
  formDetails = JSON.parse(myInput) ?? [];

  //const { index, delRow } = props;
  const [rows, setRows] = useState(myInput);

  const deleteRow = (rows) => {
    localStorage.removeRow("myInput");
    let myInput = [...rows];
    myInput = myInput.filter((rows, index) => (rows !== index) === true);
    setRows(myInput);
  };

  return (
    <tbody>
      {formDetails.map((row, index) => (
        <tr key={`key-${index}`}>
          <td>{row.email}</td>
          <td>{row.username}</td>
          <td>{row.skill}</td>
          <td>{row.gender}</td>
          <td
            onClick={() => {
              deleteRow();
              console.log(`you clicked`);
            }}
          >
            {<Button />}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableData;

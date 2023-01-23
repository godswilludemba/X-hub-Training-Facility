import React from "react";
import Button from "../Button/Button";

const TableData = (delRow) => {
  const myInput = localStorage.getItem("inputValue");
  let formDetails;
  formDetails = JSON.parse(myInput) ?? [];

  return (
    <tbody>
      {formDetails.map((row, index) => (
        <tr key={`key-${index}`}>
          <td>{row.email}</td>
          <td>{row.username}</td>
          <td>{row.skill}</td>
          <td>{row.gender}</td>
          <td>{<Button />}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableData;

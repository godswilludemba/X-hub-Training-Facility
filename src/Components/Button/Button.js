import React, { useState } from "react";
import "./button.css";

const Button = (props) => {
  const { delRow, index } = props;
  const myInput = localStorage.getItem("inputValue");
  const [rows, setRows] = useState(myInput);

  const deleteRow = (number) => {
    let copy = [...rows];
    copy = copy.filter((item, index) => (number !== index) === true);
    setRows(copy);
  };
  return <button className="button">Delete</button>;
};

export default Button;

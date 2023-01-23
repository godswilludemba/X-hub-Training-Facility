import React, { useState } from "react";
import styled from "styled-components";
import "./Form.css";
import FormInput from "./FormInput";

function Form() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    gender: "",
    skill: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "username should be 3-12 characters!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,12}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "www.godstime@yahoo.com",
      errorMessage: "it should be valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage: "",
      label: "Birthday",
      required: true,
    },
    {
      id: 4,
      name: "gender",
      type: "text",
      placeholder: "male/female",
      errorMessage: "",
      label: "gender",
      required: true,
    },
    {
      id: 5,
      name: "skill",
      type: "text",
      placeholder: "skill",
      errorMessage: "skill don't match!",
      label: "front-end, server side, smart contract dev",
      required: true,
    },
    {
      id: 6,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage: "Password should be 8 characters and special character!",
      label: "Password",
      required: true,
    },
    {
      id: 7,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match!",
      label: "Confirm Password",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  console.log(values);
  return (
    <div>
      <Nav>welcome to X-Hub TECHNOLOGIES</Nav>
      <div className="app">
        <form onSubmit={handleSubmit}>
          <h1 className="form-h1">Register/Login</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          {/* <FormInput name="username" placeholder="Username" />
        {/* <FormInput name="email" placeholder="Email" />
        <FormInput name="full name" placeholder="Full name" />
        <FormInput name="others" placeholder="Others" /> */}
          <button className="form-button">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
const Nav = styled.div`
  background-color: #74d1fc;
  padding: 1.8rem;
  text-align: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 600;
`;

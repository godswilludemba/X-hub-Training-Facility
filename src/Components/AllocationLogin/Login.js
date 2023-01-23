import React, { useState } from "react";
import Button from "../Button/Button";
import "./login.css";
import LoginInput from "./LoginInput";
import Select from "react-select";
import TableData from "../TableData/TableData";

const Login = () => {
  //const data = useRef();
  const [values, setValues] = useState({
    username: "",
    email: "",
    skill: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "username should be 4-12 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{4,12}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "www,youremail@anythin.com",
      errorMessage: "it must be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 3,
      name: "gender",
      type: "text",
      placeholder: "Male/Female",
      errorMessage: "it must be either male or female",
      label: "Gender",
      required: true,
    },

    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "password should be 8-16 characters and include at least 1 letter,1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-\#\$\.\%\&\*])(?=.*[a-zA-Z]).{8,16}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm password",
      errorMessage: "password don't match",
      label: "Confirm password",
      pattern: values.password,
      required: true,
    },
  ];

  const options = [
    { value: "Front-End-Dev ", label: "Front-End-Dev " },
    { value: "Server-Side-Dev ", label: "Server-Side-Dev " },
    { value: "Smart-Contract-Dev ", label: "Smart-Contract-Dev " },
    { value: "Facilitators ", label: "Facilitators " },
  ];

  const handleChange = (selectedOption) => {
    //console.log("handleChange", selectedOption);
    console.log(selectedOption.value);
    return [setValues({ ...values, skill: selectedOption.value })];
  };

  const handleSubmit = (e) => {
    //e.preventDefault();
    console.log(saveToLocalStorage(values));
    return true;
    //console.log(data.current.values, "initial values");
    //console.log(usernameRef);
    //const data = new FormData(e.target);
  };

  function saveToLocalStorage(values) {
    let a;
    a = JSON.parse(localStorage.getItem("inputValue"));
    console.table(a);
    if (!a) {
      a = [];
    }
    a.push(values);
    localStorage.setItem("inputValue", JSON.stringify(a));
    return a;
  }

  const onChange = (e) => [
    setValues({ ...values, [e.target.name]: e.target.value }),
  ];

  // const handleClick = () => {
  //   console.log(data.current.values, "initial values");
  //   localStorage.setItem("inputValue", data.current.values);
  // };

  //console.log(localStorage.getItem("inputValues"));
  const rooms = ["room1", "room2", "room3", "room4", "room5", "room6"];
  // console.log(rooms);

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1 className="reg-h1">Register</h1>
        <Select
          id={4}
          name="skill"
          placeholder="skill"
          options={options}
          onChange={handleChange}
        />
        {inputs.map((input) => (
          <LoginInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            //ref={data}
          />
        ))}

        {/* <LoginInput name="email" placeholder="email" /> */}
        {/* <LoginInput name="gender" placeholder="gender" />
        <LoginInput name="password" placeholder="password" />
        <LoginInput name="confirmPwd" placeholder="confirmPwd" /> */}
        <button className="submit-button" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>

      <div className="table">
        <h1>allocation table</h1>
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>username</th>
              <th>skill</th>
              <th>Gender</th>
              <th className="action-btn">
                Actions <p> Delete All</p>
              </th>
            </tr>
          </thead>
          <TableData />
        </table>
      </div>
    </div>
  );
};

export default Login;

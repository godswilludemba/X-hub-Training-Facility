import { useState } from "react";
import "./loginInput.css";

const LoginInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="loginInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        // ref={props.refer}
        // name={props.name}
        // placeholder={props.placeholder}
        // onChange={(e) => props.setUsername(e.target.value)}
        onBlur={handleFocus}
        // onFocused={() =>
        //   inputProps.name === "confirmPassword" && setFocused(true)
        // }
        focused={focused.toString()}
      />
      <h3>{errorMessage}</h3>
    </div>
  );
};

export default LoginInput;

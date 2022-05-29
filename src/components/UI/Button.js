import React from "react";

import './Button.css';
const Button = (props) => {

  return (
    <button type="submit" onClick={props.onClick}>{props.name}</button>
  );
}

export default Button;
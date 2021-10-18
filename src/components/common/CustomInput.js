import * as React from "react";

const CustomInput = (props) => {

  return (
    <input
      type={props.type}
      name={props.name}
      className={props.className}
      value={props.value}
      onChange={e => props.handleInput(e.target.value)}

    />
  );
};
export default CustomInput;
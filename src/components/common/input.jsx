import React from "react";

const Input = ({ name, ...rest }) => {
  return (
    <div className="form-group">
      <input {...rest} id={name} name={name} className="form-control" />
    </div>
  );
};

export default Input;
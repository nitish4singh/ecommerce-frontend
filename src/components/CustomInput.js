import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, classname, value, onBlur, onChange } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${classname}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default CustomInput;

import { useRef, useState } from "react";

const Form = () => {
  const inputElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(inputElement.current.value);
  };

  return (
    <div className="control">
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputElement} />
        <input type="submit" value="Update List" />
      </form>
    </div>
  );
};

export default Form;

import { useRef, useState } from "react";

const Form = (props) => {
  const taskTitleInput = useRef();
  const taskApplicationInput = useRef();

  const updateData = props.updateTask;
  const handleSubmit = (e) => {
    e.preventDefault();


    const tasktitle = updateData({
      id: "",
      task: taskTitleInput.current.value,
      application: taskApplicationInput.current.value,
    });
  };

  return (
    <div className="control">
      <form onSubmit={handleSubmit}>
        <label htmlFor="taskName" className="control-label">
          Task Title:
        </label>
        <br />
        <input type="text" id="taskName" ref={taskTitleInput} />
        <br /> <br />
        <label htmlFor="taskCat" className="control-label">
          Task Category:
        </label>
        <br />
        <input
          type="text"
          id="taskCat"
          ref={taskApplicationInput}
        /> <br /> <br />
        <input type="submit" value="Update List" />
      </form>
    </div>
  );
};

export default Form;

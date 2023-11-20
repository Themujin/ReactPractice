import { useRef, useState } from "react";

const Form = (props) => {
  const taskTitle = useRef();
  const taskCategory = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: "",
      Task: taskTitle.current.value,
      Application: taskCategory.current.value,
    };
    props.updateTask(task);
  };

  return (
    <div className="control">
      <form onSubmit={handleSubmit}>
        <label htmlFor="taskName" className="control-label">
          Task Title:
        </label>
        <input type="text" id="taskName" ref={taskTitle} />
        <br /> <br />
        <label htmlFor="taskCat" className="control-label">
          Task Category:
        </label>
        <input type="text" id="taskCat" ref={taskCategory} />
        <input type="submit" value="Update List" />
      </form>
    </div>
  );
};

export default Form;

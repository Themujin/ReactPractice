import { useState } from "react";
import Input from "./Components/Input";

const Form = (props) => {
  const [task, setTask] = useState("");
  const [application, setApplication] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = { id: "", Task: task, Application: application };
    props.updateData(postData);
  };
  return (
    <div className="control">
      <form onSubmit={handleSubmit}>
        <Input
          lable="Task title"
          id="Task"
          value={task}
          onChange={(id, value) => {
            setTask(value);
          }}
        />
        <br /> <br />
        <Input
          lable="Application"
          id="Application"
          value={application}
          onChange={(id, value) => setApplication(value)}
        />
        <br /> <br />
        <input type="submit" value="Update List" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Form;

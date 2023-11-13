import "./styles.css";
import { useState } from "react";
import Item from "./Components/Item.js";

export default function App() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <div className="App">
      <h1>React Test project 0.1</h1>
      <h2>List manipulation</h2>
      <div className="wrapper">
        <div className="control">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input type="submit" value="Update List" />
          </form>
        </div>
        <div className="list">
          <Item id="1" title="Test title" />
        </div>
      </div>
    </div>
  );
}

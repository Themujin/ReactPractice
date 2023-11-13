import "./styles.css";
import { useState } from "react";
import Item from "./Components/Item.js";

export default function App() {
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(count);
  };

  const list = (count) => {
    return <Item id={count} title={"Test title ${count}"} />;
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
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <input type="submit" value="Update List" />
          </form>
        </div>
        <div className="list">{list(count)}</div>
      </div>
    </div>
  );
}

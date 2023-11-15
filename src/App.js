import "./styles.css";
import { useRef, useState } from "react";
import Item from "./Components/Item.js";

export default function App() {
  const [count, setCount] = useState("");

  const inputElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(inputElement.current.value);
  };

  const list = () => {
    const items = [];
    for (let index = 0; index < count; index++) {
      items.push(
        <Item key={index} id={index + 1} title={`Test title ${index + 1}`} />,
      );
    }
    return items;
  };

  return (
    <div className="App">
      <h1>React Test project 0.1</h1>
      <h2>List manipulation</h2>
      <div className="wrapper">
        <div className="control">
          <form onSubmit={handleSubmit}>
            <input type="text" ref={inputElement} />
            <input type="submit" value="Update List" />
          </form>
        </div>

        <div className="list">{count ? list() : "No data"}</div>
      </div>
    </div>
  );
}

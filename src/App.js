import "./styles.css";
import { useState } from "react";
import Item from "./Components/Item.js";

export default function App() {
  const [count, setCount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The value you entered was: ${count}`);
  };

  const list = () => {
    const items = [];
    for (let index = 0; index < count; index++) {
      items.push(<Item id={index} title="Test title" />);
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
            <input
              type="text"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <input type="submit" value="Update List" />
          </form>
        </div>

        <div className="list">
         {if (count < 1) 
          {list()}
         
        }
          
        </div>
      </div>
    </div>
  );
}

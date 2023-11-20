import "./styles.css";
import { useRef, useState } from "react";
import Item from "./Components/Item.js";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import List from "./List";
import Form from "./Form";

export default function App() {
  const [data, setData] = useState([
    {
      id: 1,
      Task: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      Application: "Tresom",
    },
    {
      id: 2,
      Task: "Curabitur convallis.",
      Application: "Stronghold",
    },
    {
      id: 3,
      Task: "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
      Application: "Subin",
    },
    {
      id: 4,
      Task: "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      Application: "Konklux",
    },
    {
      id: 5,
      Task: "In hac habitasse platea dictumst.",
      Application: "Bitchip",
    },
  ]);

  const updateTask = (task) => {
    data.push(task);
    task.id = data.length;
    setData(data);
    console.log(data);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <h1>React Test project 0.1</h1>
        <h2>List manipulation</h2>
        <nav>
          <Link to="/">Form</Link> <br />
          <Link to="/list">List</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Form updateTask={updateTask} />}></Route>
          <Route path="/list" element={<List task={data} />}></Route>
        </Routes>
        <div className="wrapper">
          <Outlet />
        </div>
      </div>
    </BrowserRouter>
  );
}

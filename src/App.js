import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React Test project 0.1</h1>
      <h2>List manipulation</h2>
      <div className="wrapper">
        <div className="control">
          <input type="text" name="" id="" />
          <input type="button" value="Update List" />
        </div>
        <div className="list">
          <div className="item">
            <span className="item__id">12</span>
            <h4 className="item__title">Item Title</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
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

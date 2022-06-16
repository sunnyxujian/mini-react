import React from "./src/index";
import ReactDOM from "./src/react-dom"

const jsxELe = (
  <h1 className="title" style={{ color: "red" }}>
    h1的文本内容
    <div onClick={() => alert("hi~")}>
      <p>p的文本内容</p>
    </div>
  </h1>
);

ReactDOM.render(jsxELe, document.getElementById('root'))
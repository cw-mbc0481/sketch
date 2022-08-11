import React from "react";
import "./App.css";

function App() {
  console.log("mode", import.meta.env.VITE_ENV);

  return (
    <div className="App">
      <h1>Github action 테스트입니다.</h1>
    </div>
  );
}

export default App;

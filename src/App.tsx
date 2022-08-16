import React from "react";
import "./App.css";

function App() {
  console.log("APP_VERSION", import.meta.env.VITE_APP_VERSION);
  console.log("VITE_ENV", import.meta.env);
  return (
    <div className="App">
      <h1>Github action {import.meta.env.VITE_ENV} 테스트입니다.</h1>
    </div>
  );
}

export default App;

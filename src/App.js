import React from "react";
import "./App.css";

import { Header } from "./views/header";
import { Footer } from "./views/footer";
import MainPages from "./views/main-pages";

function App() {
  return (
    <div className="App">
      <Header name="wzheng123" />
      <MainPages />
      <Footer version="0.0.1" />
    </div>
  );
}

export default App;

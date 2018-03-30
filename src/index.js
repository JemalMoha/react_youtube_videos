import React from "react";
import { render } from "react-dom";
import SearchBar from "./components/SearchBar";
const API_KEY = "AIzaSyBB0iqGuzUsawSxlJTSY7tok1g0XERgQLI";
const mountNode = document.getElementById("root");

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};
render(<App />, mountNode);

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AnimalList from "./Components/AnimalList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AnimalList />
      </div>
    );
  }
}

export default App;

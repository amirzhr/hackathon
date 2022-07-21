import React from "react";
import "./App.css";
import DataDisney from "./Components/Characters/DataDisney";
import Navbar from "./Navbar";
import Favourites from "./Components/Favourites/Favourites";
import About from "./Components/About/About";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./Styles.css";
import Page from "./Components/Characters/Page";

function App() {
  return (
    <>
      <Navbar className="main-nav"></Navbar>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters/:id" element={<Page />}></Route>
          <Route path="/Characters" element={<DataDisney />} />
          <Route path="/Favourites" element={<Favourites />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </>
  );
}
export default App;

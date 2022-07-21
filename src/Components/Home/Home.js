import React from "react";
import "./index.css";
import snowflake from "./snowflake.png"
import DataDisney from "../Characters/DataDisney";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "../Characters";
    navigate(path);
  }

  return (
    <section className="body">
      <nav className="home">
        <div className="animate">
          <img src={snowflake} alt="snowflake" />
          <img src={snowflake} alt="snowflake" />
          <img src={snowflake} alt="snowflake" />
        </div>
        <div className="animate2">
          <img src={snowflake} alt="snowflake" />
          <img src={snowflake} alt="snowflake" />
        </div>
        <div className="footer">
          <h1 className="welcome">Welcome to Disneyland !</h1>
          <h2>Where all your dream comes true</h2>
          <button onClick={routeChange} className="characterPage">
            EXPLORE OUR MAGICAL WORLD
          </button>
          <p>© 2022 D-JAMZ Group</p>
        </div>
      </nav>
    </section>
  );
};

export default Home;

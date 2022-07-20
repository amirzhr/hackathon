import React from "react";
import axios from "axios";
import "./index.css";
import snowflake from "./snowflake.png"

const Home = () => {
  return (
    <section className = "body">
      <nav className="home">
        <div className="animate">
          <img src={snowflake} />
          <img src={snowflake} />
          <img src={snowflake} />
        </div>
        <div className="animate2">
          <img src={snowflake} />
          <img src={snowflake} />
        </div>
        <div className="footer">
          <p>© 2022 D-JAMZ Group</p>
        </div>
      </nav>
    </section>
  );
};

export default Home;

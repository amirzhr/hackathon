import React from "react";
import "./Favourites.css";
import { fav } from "../Characters/Page";

const Favourites = () => {
  console.log(fav);

  return (
    <section className="body">
      <h1 className="fav">MY FAVOURITE DSNEY CHARACTERS</h1>
      <div className="home">
        <div>
          {fav.map((favor) => {
            return (
              <div key={favor._id} className="img">
                <img className="src" alt="scaling" src={favor.imageUrl} />
                <h1 className="src1">Name: "{favor.name}"</h1>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Favourites;

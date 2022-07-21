import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./index.css";

export const fav = [];

function Page() {
  const { id } = useParams();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const getProfile = () => {
      try {
        axios
          .get(`https://api.disneyapi.dev/characters/${id}`)
          .then((response) => {
            setProfile(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, [id]);

  console.log(profile);

  function add_fav() {
    fav.push(profile);
    console.log(fav);
  }

  return (
    <div className="page-container">
      <div>
        <img className="character" src={profile.imageUrl}></img>
        <h1 className="name">"{profile.name}"</h1>
        <button onClick={add_fav} className="btn-favourites">
          Add to Favourites
        </button>
      </div>
      <div className="description">
        <div className="found-container">
          <h1 className="film">Films & TV Shows</h1>
          <div>
            <p className="category">Films: {[profile.films].join(",")}</p>
          </div>
          <div>
            <p className="category">TV Shows: {[profile.tvShows].join(",")}</p>
          </div>
          <div>
            <p className="category">
              Short Films: {[profile.shortFilms].join(",")}
            </p>
          </div>
        </div>
        <div className="friends-container">
          <h1 className="allies-enemies"> Allies & Enemies</h1>
          <div>
            <p className="category">
              Known Allies: {[profile.allies].join(",")}
            </p>
          </div>
          <div>
            <p className="category">
              Known Enemies: {[profile.enemies].join(",")}
            </p>
          </div>
        </div>
        <div className="commercial-container">
          <h1 className="commercials">Commercials</h1>
          <div>
            <p className="category">
              video Games: {[profile.videoGames].join(",")}
            </p>
          </div>
          <div>
            <p className="category">
              Park Attractions: {[profile.parkAttractions].join(",")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

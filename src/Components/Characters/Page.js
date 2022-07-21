import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./index.css";

export default function Page() {
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

  return (
    <div className="page-container">
      <div>
        <img className="character" src={profile.imageUrl}></img>
        <h1 className="name">"{profile.name}"</h1>
        <button>Add to Favourites</button>
      </div>
      <div className="description">
        <div className="found-container">
          <h1 className="film">Films & TV Shows</h1>
          <div>
            <p>Films: {profile.films}</p>
          </div>
          <div>
            <p>TV Shows: {profile.tvShows}</p>
          </div>
          <div>
            <p>Short Films: {profile.shortFilms}</p>
          </div>
        </div>
        <div className="friends-container">
          <h1 className="allies-enemies"> Allies & Enemies</h1>
          <div>
            <p>Known Allies: {profile.allies}</p>
          </div>
          <div>
            <p>Known Enemies: {profile.enemies}</p>
          </div>
        </div>
        <div className="commercial-container">
          <h1 className="commercials">Commercials</h1>
          <div>
            <p>video Games: {profile.videoGames}</p>
          </div>
          <div>
            <p>Park Attractions: {profile.parkAttractions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

            {
              /* <ul>
              {" "}
              {profile.films?.map((z) => (
                <li>{z}</li>
              ))}
            </ul> */
            }
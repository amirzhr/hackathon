import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Page() {
  const { id } = useParams();
  const [profile, setProfile] = useState([]);
  const [more_info, setMore_info] = useState([]);

  useEffect(() => {
    const getProfile = () => {
      try {
        axios.get(`https://api.disneyapi.dev/characters/${id}`).then((response) => {
          setProfile(response.data.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
  }, [id]);

  useEffect(() => {
    const getMoreInfo = () => {
      try {
        axios.get(`https://api.disneyapi.dev/characters/${id}/moreinfo`).then(
          (response) => {
            setMore_info(response.data.data);
          }
        );
      } catch (error) {
        console.log(error);
      }
    };
  }, [id]);

  console.log(more_info);
  return (
    <div>
      <img src={profile.images?.jpg.imageUrl}></img>
      <h1>
        {id}
      </h1>
      <p>Score: {profile.films}/10</p>
      <p>Running from: {profile.shortFilms}</p>
      <p>Summary: {profile.tvShows}</p>
      <p>More Info: {more_info.moreinfo}</p>
    </div>
  ); 
  // <h1>{id}</h1>;
}

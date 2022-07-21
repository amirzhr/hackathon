import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./index.css";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";

function DataDisney() {
  //current page
  const [currentPage, setCurrentPage] = useState(1);

  //getting 50 characters
  const [characterList, setCharacterList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getCharacters();
  }, [currentPage]);

  const getCharacters = async () => {
    try {
      const response = await axios.get(
        "https://api.disneyapi.dev/characters/",
        {
          params: { page: currentPage },
        }
      );
      setCharacterList(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const goToPage = React.useCallback((id) => {
    navigate(`/characters/${id}`);
  });

  console.log(characterList);
  return (
    <div className="body">
      <h1 className="title">CHARACTERS</h1>
      <div className="buttons">
        <button
          className="previous"
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        >
          {""} <AiOutlineLeftCircle/>
        </button>
        <button
          className="next"
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        >
          {""} <AiOutlineRightCircle/>
        </button>
      </div>
      <div>
        {characterList.map((characters) => {
          return (
            <div key={characters._id} className="images">
              <button id="show-modal">
                <img
                  className="scale"
                  onClick={() => {
                    goToPage(characters._id);
                  }}
                  src={characters.imageUrl}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DataDisney;

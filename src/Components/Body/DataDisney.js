import axios from "axios";
import React, {useEffect, useState} from "react";
import "./index.css";
import showDescription from "./showDescription";

function DataDisney() {
  //current page
  const [currentPage, setCurrentPage] = useState(1);
  
  //getting 50 characters
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    getCharacters();
  }, [currentPage]);

  const getCharacters = async() => {
    try {
      const response = await axios.get("https://api.disneyapi.dev/characters/", {
        params: { page: currentPage },
      });
      setCharacterList(response.data.data);
    } catch(error) {
      console.log(error);
    }
  };

  console.log(characterList);
  return (
    <div className="body">
      <h1>CHARACTERS</h1>
      <button
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        {""} Next Page
      </button>
      <button
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
      >
        {""} Previous Page
      </button>

      <div>
        {characterList.map((characters) => {
          return (
            <div key={characters._id} className="images">
              <button id="show-modal">
                <img className="scale" src={characters.imageUrl} />
              </button>
            </div>
          );
        })}
      </div>

      <div id="myModal" className="modal">
        <div class="modal-content">
          <div class="modal-header">
            <span class="close">&times;</span>
            <h2>Change keybinds</h2>
          </div>
          <div class="modal-body">
            <p>placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataDisney;

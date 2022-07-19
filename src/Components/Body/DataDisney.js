import axios from "axios";
import React, {useEffect, useState} from "react";
import "./index.css";

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
      const response = await axios.get("https://api.disneyapi.dev/characters", {
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
              <img src={characters.imageUrl} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DataDisney;

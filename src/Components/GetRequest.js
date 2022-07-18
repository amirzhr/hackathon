import React from "react";
import characterList from "../services/dataDisney";

const GetRequest = ({}) => {
  const [characters, setCharacters] = React.useState([]);

  const getAllCharacters = () => {
    characterList.getAll().then((initialCharacters) => {
      console.log("initial characters", initialCharacters);

      setCharacters(initialCharacters);
      console.log("characters", characters);
    });
  };

  return (
    <>
      <div className="main-container">
        <div>
          <h2>All Disney characters</h2>
        </div>
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={getAllCharacters}
          >
            Show all Disney characters
          </button>
        </div>
        <div>
          <p
            style={{ whitespace: "normal" }}
            className="font-normal text-gray-700 dark:text-gray-400"
          >
            {JSON.stringify(characters, null, 2)}
          </p>
        </div>
      </div>
    </>
  );
};

export default GetRequest;

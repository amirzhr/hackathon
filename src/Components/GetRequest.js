import React from "react";
import commentService from "../services/dataDisney";

const GetRequest = ({}) => {
  const [comments, setComments] = React.useState([]);

  const getAllComments = () => {
    commentService.getAll().then((initialComments) => {
      console.log("initial comments", initialComments);

      setComments(initialComments);
      console.log("comments", comments);
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
            onClick={getAllComments}
          >
            Show all Disney characters
          </button>
        </div>
      </div>
    </>
  );
};

export default GetRequest;

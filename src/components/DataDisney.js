import React, { Component } from "react";
import axios from "axios";
import "./index.css";

//Animal List
class DataDisney extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    // for (var i = 1; i < 150; i++) {
      axios
        .get("https://api.disneyapi.dev/characters")
        .then((response) => {
          console.log(response.data.data);
          this.setState({ characters: response.data.data });
        })
        .catch((error) => {
          console.log(error);
        });
    // }

  }

  render() {
    const { characters } = this.state;

    return (
      <div>
        {characters.length
          ? characters.map((character) => (
              <div key={character._id}>
                <div>
                  <p>
                    Name = {character.name}
                  </p>
                  <img src={character.imageUrl} />
                </div>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default DataDisney;

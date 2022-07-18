import React, { Component } from "react";
import axios from "axios";
import "./index.css";

//Animal List
class AnimalList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  
  componentDidMount() {
    axios
      .get("https://api.disneyapi.dev/characters/")
      .then((response) => {
        console.log([response.data]);
        this.setState({ posts: [response.data] });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        {posts.length
          ? posts.map((posts) => (
            console.log(posts._id),
              <div key={posts._id}>
                <p>
                  Name = {posts.name} <br></br>
                </p>
                <img src={posts.imageUrl} />
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default AnimalList;

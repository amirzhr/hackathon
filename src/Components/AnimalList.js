import React, { Component } from "react";
import axios from "axios";

class AnimalList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://zoo-animal-api.herokuapp.com/animals/rand/" + "1")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
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
          ? posts.map((post) => <div key={post.id}>
            Name = {post.name} <br></br>
            Latin name = {post.latin_name}
            <img src = {post.image_link} />
          </div>)
          : null}
      </div>
    );
  }
}

export default AnimalList;

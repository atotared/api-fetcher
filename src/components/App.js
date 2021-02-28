import React from "react";
import unsplash from "../api/unsplash";
import Searchbar from "./Searchbar";
import ImagesList from "./ImagesList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    // New async - await way to handle promises
    const response = await unsplash.get("/search/photos", {
      // Replace axios.get with unsplash.get (thanks to axios.create)
      params: {
        query: term,
      },
    });
    console.log(response.data.results);
    this.setState({ images: response.data.results }); // Need arrow function in order for -this- keyword to work
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Searchbar
          onSubmit={this.onSearchSubmit} // *1*
          onTest={() => console.log("test")}
        />
        <ImagesList images={this.state.images} />
      </div>
    );
  }
}

export default App;

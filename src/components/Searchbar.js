import React from "react";

class Searchbar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label for="searchbar">Primary searchbar</label>
          <input
            type="text"
            id="searchbar"
            placeholder="Enter some text"
          ></input>
        </form>
      </div>
    );
  }
}

export default Searchbar;

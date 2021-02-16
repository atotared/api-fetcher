import React from "react";

class Searchbar extends React.Component {
  state = { term: "" };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              id="searchbar"
              placeholder="What are you looking for?"
              // Example of a CONTROLLED COMPONENT => value always references to the state of the component
              value={this.state.term}
              onChange={(event) => this.setState({ term: event.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;

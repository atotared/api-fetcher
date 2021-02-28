import React from "react";

class Searchbar extends React.Component {
  state = { term: "" };

  // By using an arrow function, the value of this keyword is binded to the Class / instance of the Class
  onFormSubmit = (e) => {
    e.preventDefault(); // Without arrow function, this keyword would be undefined
    console.log("THIS", this);
    this.props.onSubmit(this.state.term); // (onSearchSubmit) is passed from App class component; *1* => equals to onSearchSubmit(this.state.term) because - this.props.onSubmit - contains the async fetch function
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
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

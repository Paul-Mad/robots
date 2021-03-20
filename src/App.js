import React, { Component } from "react";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import { robots } from "./Robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox state={this.state} onSearchChange={this.onSearchChange} />
        <CardList state={this.state} />
      </div>
    );
  }
}

export default App;

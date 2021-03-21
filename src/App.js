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
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  dataFilter = (item) =>
    item.name.toLowerCase().match(this.state.searchfield.toLowerCase()) && true;

  render() {
    const filteredRobots = this.state.robots.filter(this.dataFilter);

    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList filteredRobots={filteredRobots} />
      </div>
    );
  }
}

export default App;

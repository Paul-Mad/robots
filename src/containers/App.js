import React, { Component } from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import Error from "../components/Error";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    //Using async/await
    this.getRobots();

    //Using consuming promisses
    // fetch("http://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) =>
    //     this.setState({
    //       robots: data,
    //     })
    //   )
    //   .catch((error) => console.error(error));
  }

  getRobots = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      this.setState({ robots: data });
    } catch (error) {
      console.error(error);
    }
  };

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  dataFilter = (item) =>
    item.name.toLowerCase().match(this.state.searchfield.toLowerCase()) && true;

  render() {
    const filteredRobots = this.state.robots.filter(this.dataFilter);

    return !this.state.robots.length ? (
      <h1 className="f2">Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Scroll>
          <Error>
            <CardList filteredRobots={filteredRobots} />
          </Error>
        </Scroll>
      </div>
    );
  }
}

export default App;

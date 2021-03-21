import React, { Component, useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import Error from "../components/Error";
import "./App.css";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    //Using async/await
    getRobots();

    //Using consuming promisses
    // fetch("http://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) =>
    //     this.setState({
    //       robots: data,
    //     })
    //   )
    //   .catch((error) => console.error(error));
  }, []);

  const getRobots = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      setRobots(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSearchChange = (e) => {
    setSearchfield(e.target.value);
  };

  const dataFilter = (item) =>
    item.name.toLowerCase().match(searchfield.toLowerCase()) && true;

  const filteredRobots = robots.filter(dataFilter);

  return !robots.length ? (
    <h1 className="f2">Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f2">RoboFriends</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <Scroll>
        <Error>
          <CardList filteredRobots={filteredRobots} />
        </Error>
      </Scroll>
    </div>
  );
};

export default App;

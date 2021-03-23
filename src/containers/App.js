import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import Error from "../components/Error";
import "./App.css";
import { setSearchField, getRobots } from "../actions";
import Header from "../components/Header";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.getRobots.robots,
    isPending: state.getRobots.isPending,
    error: state.getRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onGetRobots: () => dispatch(getRobots()),
  };
};

const App = (props) => {
  //Get variables from props
  const {
    searchField,
    onSearchChange,
    robots,
    onGetRobots,
    isPending,
    error,
  } = props;

  useEffect(() => {
    onGetRobots();
  }, []);

  const dataFilter = (item) =>
    item.name.toLowerCase().match(searchField.toLowerCase()) && true;

  const filteredRobots = robots.filter(dataFilter);

  return isPending ? (
    <h1 className="f2">Loading...</h1>
  ) : (
    <div className="tc">
      <Header />
      <SearchBox onSearchChange={onSearchChange} />
      <Scroll>
        <Error>
          <CardList filteredRobots={filteredRobots} />
        </Error>
      </Scroll>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

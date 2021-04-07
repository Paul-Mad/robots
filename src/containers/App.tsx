import React, { useEffect } from "react";
import { connect } from "react-redux";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import Error from "../components/Error";
import "./App.css";
import { setSearchField, getRobots } from "../actions";
import Header from "../components/Header";

export interface IRobot {
  name: string;
  id: number;
  email: string;
  username: string;
}

interface IAppProps {
  searchField: string;
  robots: Array<IRobot>;
  isPending: boolean;
  error: string;
  onSearchChange: Function;
  onGetRobots: Function;
}

interface IAppState {
  searchRobots: { searchField: string };
  getRobots: { robots: Array<IRobot>; isPending: boolean; error: any };
}

const mapStateToProps = (state: IAppState) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.getRobots.robots,
    isPending: state.getRobots.isPending,
    error: state.getRobots.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>) =>
      dispatch(setSearchField(event.currentTarget.value)),
    onGetRobots: () => dispatch(getRobots()),
  };
};

const App = (props: IAppProps): JSX.Element => {
  //Get variables from props
  const { searchField, onSearchChange, robots, onGetRobots, isPending } = props;

  useEffect((): void => {
    onGetRobots();
  }, []);

  const dataFilter = (item: any) =>
    item.name.toLowerCase().match(searchField.toLowerCase()) && true;

  const filteredRobots: Array<IRobot> = robots.filter(dataFilter);

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

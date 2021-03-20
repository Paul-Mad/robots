import React, { Component } from "react";
import Card from "./Card";

class CardList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    const dataFilter = (item) =>
      item.name
        .toLowerCase()
        .match(this.props.state.searchfield.toLowerCase()) && true;

    const filteredRobots = this.props.state.robots.filter(dataFilter);

    return (
      <div>
        {filteredRobots.map((user) => (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            userName={user.username}
            email={user.email}
          />
        ))}
      </div>
    );
  }
}

export default CardList;

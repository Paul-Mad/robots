import React, { Component } from "react";
import Card from "./Card";

class CardList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.filteredRobots.map((user) => (
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

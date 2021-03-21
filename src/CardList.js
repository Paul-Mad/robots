import React from "react";
import Card from "./Card";

const CardList = (props) => {
  return (
    <div>
      {props.filteredRobots.map((user) => (
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
};

export default CardList;

import React from "react";
import Card from "./Card";

import { IRobot } from "../containers/App";

const CardList = ({
  filteredRobots,
}: {
  filteredRobots: Array<IRobot>;
}): JSX.Element => {
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
};

export default CardList;

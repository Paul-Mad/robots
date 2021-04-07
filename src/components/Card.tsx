import * as React from "react";

interface CardStatelessProps {
  name: string;
  email: string;
  userName: string;
  id: number;
}

const Card: React.FC<CardStatelessProps> = ({
  name,
  email,
  userName,
  id,
}): JSX.Element => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{userName}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;

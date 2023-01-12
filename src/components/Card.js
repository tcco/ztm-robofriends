import React from 'react';

const Card = ({ id, name, email }) => {
  let robohashUrl = 'https://robohash.org/' + id + '?200x200';
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-S">
      <img alt="robots" src={robohashUrl} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;

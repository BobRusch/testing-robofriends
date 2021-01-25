import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img
        alt='robots'
        src={`https://robohash.org/${id}?size=200x200`}
        height='200px'
        width='200px'
        maxHeight='200px'
        maxWidth='200px'
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;

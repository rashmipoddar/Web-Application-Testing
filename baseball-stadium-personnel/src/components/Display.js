import React from 'react';

const Display = (props) => {
  return (
    <>
      <h1>Balls</h1>
      <h1>{props.balls}</h1>
      <h1 data-testid='strikes'>Strikes</h1>
      <h1>{props.strikes}</h1>
    </>
  )
}

export default Display;

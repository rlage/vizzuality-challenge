import React from 'react';

const Circle = ({ x, y, color, radius }) => {
  return(
    <circle data-testid='circle' cx={x} cy={y} fill={color} r={radius} ></circle>
  )
}

export default Circle;
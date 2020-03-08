import React from 'react';
import Circle from './Circle';
import Label from '../Label';

const Basic = ({ data }) => {
  const r = 6;
  const separator = 7;
  return(
    <g> 
      {
        data ?
          data.items.map((d,i) => {
            return (
              <g transform={`translate(${0} ${(i * r * 2 + (separator * i) + 10)})`}>
                <Circle
                  x={0}
                  y={0}
                  radius={r}
                  color={d.color}
                />
                <Label
                  x={r + 5}
                  y={r/2}
                  text={d.name}
                />
              </g>
            )
          })
        :
        null
      }
    </g>
  )
}

export default Basic;
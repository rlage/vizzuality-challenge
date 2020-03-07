import React from 'react';
import Label from '../Label';

const Choropleth = ({ data, width }) => {
  {
    const items = data ? data.items : null;
    if(items) {
      const rectWidth = width / items.length;
      return(
        items.map((d, i) => {
          return (
            <g>
              <rect x={rectWidth*i} y={5} width={rectWidth} height={7} fill={i === 0 ? "#F5F5F5" : d.color} />
              <Label x={rectWidth*i + rectWidth/2 - 7} y={25} text={d.name.replace(/\s/g,'')}/>
            </g>
          )
        })
      )
    }
  }
  return null;
}

export default Choropleth;
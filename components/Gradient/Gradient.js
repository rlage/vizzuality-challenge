import React from 'react';
import Label from '../Label';

const Gradient = ({ data, width }) => {
  const items = data ? data.items : null;
  {
    if(items) {
      return(
        <g>
          <defs>
            <linearGradient id="myGradient">
              {
                items ? 
                  items.map((d,i) => {
                    return (
                      <stop offset={`${(i+1) * (100 / data.items.length)}%`}  stopColor={d.color} />
                    )
                  })
                :
                null
              }
            </linearGradient>
          </defs>
          <rect x={0} y={5} width={width} height="7" fill="url('#myGradient')" />
          <Label x={0} y={25} text={items[0].name}/>
          <Label x={width-30} y={25} text={items[items.length-1].name}/>
        </g>
      )
    }
  }
  return null;
}

export default Gradient;
import React from 'react';
import Label from '../Label/Label';

const Gradient = ({ data, width }) => {
  console.log(data);
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
                      <stop offset={`${(i+1) * (100 / data.items.length)}%`}  stop-color={d.color} />
                    )
                  })
                :
                null
              }
            </linearGradient>
          </defs>
          <rect x={0} y={5} width="100%" height="7" fill="url('#myGradient')" />
          <Label x={0} y={25} text={items[0].name}/>
          <Label x={width-20} y={25} text={items[items.length-1].name}/>
        </g>
      )
    }
  }
  return null;
}

export default Gradient;
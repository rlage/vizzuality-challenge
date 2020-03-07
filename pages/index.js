import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from '../components/Chart';
import Basic from '../components/Basic';
import { useChartDimensions } from '../components/utils';

const Index = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://raw.githubusercontent.com/Vizzuality/front-end-code-challenge/master/data.json',
      );
      let dataObject = {};
      result.data.forEach(d => dataObject[d.type] = d)
      setData(dataObject);
    }
    fetchData();
  }, []);

  const [ref, dimensions] = useChartDimensions();
  return (
    <div ref={ref}>
      <p>Hello Next.js</p>
      <Chart dimensions={dimensions}>
        <Basic data={data.basic}></Basic>
      </Chart>
    </div>
  );
}

export default Index;
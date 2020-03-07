import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from '../components/Chart';
import Basic from '../components/Basic';
import Gradient from '../components/Gradient';
import { useChartDimensions } from '../components/utils';
import styles from './index.module.css'

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
    <div className={styles.app} ref={ref}>
      <p>Hello Next.js</p>
      <Chart cssClass='basic' dimensions={dimensions}>
        <Basic data={data.basic} />
      </Chart>
      <Chart cssClass='gradient' dimensions={dimensions}>
        <Gradient data={data.gradient} width={dimensions.boundedWidth}/>
      </Chart>
    </div>
  );
}

export default Index;
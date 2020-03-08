import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from '../components/Chart';
import Headline from '../components/Headline';
import Basic from '../components/Basic';
import Gradient from '../components/Gradient';
import Choropleth from '../components/Choropleth';
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
      result.data.forEach(d => d.type !== 'timeline' ? dataObject[d.type] = d : null)
      setData(dataObject);
    }
    fetchData();
  }, []);
  
  const [ref, dimensions] = useChartDimensions();
  return (
    <div className={styles.app} ref={ref}>
      <Headline data={data.basic}>
        <Chart cssClass='basic' dimensions={dimensions}>
          <Basic data={data.basic} />
        </Chart>
      </Headline>
      <Headline data={data.gradient}>
        <Chart cssClass='gradient' dimensions={dimensions}>
          <Gradient data={data.gradient} width={dimensions.boundedWidth}/>
        </Chart>
      </Headline>
      <Headline data={data.choropleth}>
        <Chart cssClass='choropleth' dimensions={dimensions}>
          <Choropleth data={data.choropleth} width={dimensions.boundedWidth}/>
        </Chart>
      </Headline>
    </div>
  );
}

export default Index;
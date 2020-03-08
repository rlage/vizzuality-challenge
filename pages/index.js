import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from '../components/Chart';
import Headline from '../components/Headline';
import Basic from '../components/Basic';
import Gradient from '../components/Gradient';
import Choropleth from '../components/Choropleth';
import { useChartDimensions } from '../components/utils';
import styles from './index.module.css'
import InfoModal from '../components/InfoModal/InfoModal';

const Index = () => {
  const [data, setData] = useState(null);
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
  const [showModal, setShowModal] = useState({
    'layer': null,
    'display': false,
  });
  const updateShowModal = (name) => {
    setShowModal(
      {
        'layer': name,
        'display': !showModal.display,
      }
    )
  }
  console.log(showModal)
  return (
    <div className={styles.app} ref={ref}>
      {data ? 
        <>
          <Headline data={data.basic} setShowModal={updateShowModal}>
            <Chart cssClass='basic' dimensions={dimensions}>
              <Basic data={data.basic} />
            </Chart>
          </Headline>
          <Headline data={data.gradient} setShowModal={updateShowModal}>
            <Chart cssClass='gradient' dimensions={dimensions}>
              <Gradient data={data.gradient} width={dimensions.boundedWidth}/>
            </Chart>
          </Headline>
          <Headline data={data.choropleth} setShowModal={updateShowModal}>
            <Chart cssClass='choropleth' dimensions={dimensions}>
              <Choropleth data={data.choropleth} width={dimensions.boundedWidth}/>
            </Chart>
          </Headline>
          <InfoModal content={data.basic.description} display={showModal.display} setShowModal={updateShowModal} />
        </>
        :
        null
      }
    </div>
  );
}

export default Index;
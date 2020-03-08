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
  const [showCharts, setShowCharts] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://raw.githubusercontent.com/Vizzuality/front-end-code-challenge/master/data.json',
      );
      let dataObject = {};
      result.data.forEach(d => d.type !== 'timeline' ? dataObject[d.type] = d : null)
      setData(dataObject);
      const defaultShowCharts = Object.keys(dataObject).reduce((acc, item) => {
        return {
          ...acc,
          [item]: true,
        }
      },{})
      setShowCharts(defaultShowCharts);
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

  const updateShowCharts = (name) => {
    setShowCharts({
      ...showCharts,
      [name]: !showCharts[name]
    })
  }

  const getChart = (name, item) => {
    switch(name) {
      case "basic":
        return (
          <Basic data={item} />
        )
      case "gradient":
        return (
          <Gradient
            data={item}
            width={dimensions.boundedWidth}
          />
        )
      case "choropleth":
        return (
          <Choropleth
            data={item}
            width={dimensions.boundedWidth}
          />
      )
    }
  }
  
  return (
    <div className={styles.app} ref={ref}>
      {data && showCharts ? 
        <>
          {
            Object.keys(data).map((item) => {
              console.log(item);
              console.log(data[item]);
              return (
                <Headline
                  data={data[item]}
                  setShowModal={updateShowModal}
                  setShowCharts={updateShowCharts}
                >
                  {
                    showCharts[data[item].type] ?
                    <Chart cssClass={item} dimensions={dimensions}>
                      {getChart(item, data[item])}
                    </Chart>
                    :
                    null
                  }
                </Headline>
              )
            })
          }
          {
            showModal.display ? 
            <InfoModal content={data[showModal.layer].description} display={showModal.display} setShowModal={updateShowModal} />
            :
            null
          }
          
        </>
        :
        null
      }
    </div>
  );
}

export default Index;
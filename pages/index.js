import React, { useState, useEffect } from 'react';
import Basic from '../components/Basic';
import axios from 'axios';

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
  return (
    <div>
      <p>Hello Next.js</p>
      <Basic data={data.basic}></Basic>
    </div>
  );
}

export default Index;
import React, { useState } from 'react';
import Tooltip from '../Tooltip';
import dragDotsImg from '../../assets/drag-dots.svg';
import hideImg from '../../assets/hide.svg';
import infoImg from '../../assets/info.svg';
import arrowDownImg from '../../assets/arrow-down.svg';
import showImg from '../../assets/show.svg';
import styles from './Headline.module.css';
import Label from '../Label';

const Headline = ({ data, children }) => {
  const [ visible, setVisibility ] = useState(true);
  // const [ collapsedState, setCollapsedState ] = useState({
  //   'basic': false,
  //   'gradient': false,
  //   'choropleth': false
  // });
  const [ tooltipText, setTooltipText ] = useState('');
  const [ hoveredElement, setHoveredElement ] = useState(null);

  const handleMouseOver = (e) => {
    const bb = e.target.getBoundingClientRect();
    setHoveredElement(bb);
    let tooltipText = '';
    switch (e.target.id){
      case 'visibility':
        tooltipText = visible ? 'Hide' : 'Show';
        break;
      case 'info':
        tooltipText = 'Info';
        break;
      case 'collapse':
        tooltipText = 'Collapse';
        break;
      default:
        tooltipText = '';
    }
    setTooltipText(tooltipText);
  };

  const handleMouseOut = (e) => {
    setHoveredElement(null);
  };

  const toggleVisibility = () => {
    setVisibility(!visible);
  };
  console.log(tooltipText)
  const visibilityImg = visible ? hideImg : showImg;
  {
    if(data) {
      const name = data.name;
      const description = data.description;
      return(
        <>
          <div className={styles.container}>
            <span className={styles.leftIcons}>
              <img className={styles.img} src={dragDotsImg} />
              <span className={styles.name}> {name} </span>
            </span>
            <span className={styles.rightIcons}>
              <Tooltip
                content={tooltipText}
                element={hoveredElement}
              />
              <img
                id='visibility'
                onMouseOver={(e) => handleMouseOver(e)}
                onMouseOut={(e) => handleMouseOut(e)}
                onClick={() => toggleVisibility()}
                className={styles.img}
                src={visibilityImg}
              />
              <img
                id='info'
                onMouseOver={(e) => handleMouseOver(e)}
                onMouseOut={(e) => handleMouseOut(e)}
                onClick={() => toggleVisibility()}
                className={styles.img}
                src={infoImg}
              />
              <img
                id='collapse'
                onMouseOver={(e) => handleMouseOver(e)}
                onMouseOut={(e) => handleMouseOut(e)}
                className={styles.img}
                src={arrowDownImg}
              />
            </span>
          </div>
          {children}
        </>
        
      )
    }
  }
  return null;
}

export default Headline;
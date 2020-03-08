import React, { useState } from 'react';
import Tooltip from '../Tooltip';
import dragDotsImg from '../../assets/drag-dots.svg';
import hideImg from '../../assets/hide.svg';
import infoImg from '../../assets/info.svg';
import arrowDownImg from '../../assets/arrow-down.svg';
import showImg from '../../assets/show.svg';
import styles from './Headline.module.css';

const Headline = ({ data, children, setShowModal, setShowCharts }) => {
  const [ visible, setVisibility ] = useState(true);
  const [ collapsed, setCollapsed] = useState(false);
  const [ tooltipText, setTooltipText ] = useState('');
  const [ hoveredElement, setHoveredElement ] = useState(null);

  const handleMouseOver = (e) => {
    const bb = e.target.getBoundingClientRect();
    setHoveredElement(bb);
    let tooltipText = '';
    switch (e.target.id){
      case 'visibility':
        tooltipText = visible ? 'Hide layer' : 'Show layer';
        break;
      case 'info':
        tooltipText = 'Layer info';
        break;
      case 'collapse':
        tooltipText = collapsed ? 'Expand' : 'Collapse';
        break;
      default:
        tooltipText = '';
    }
    setTooltipText(tooltipText);
  };

  const handleInfoClick = (e) => {
    setVisibility(!visible);
    setShowModal(data.type)
  }

  const handleMouseOut = (e) => {
    setHoveredElement(null);
  };

  const handleCollapseClick = (e) => {
    setShowCharts(data.type);
    setCollapsed(!collapsed)
  };
  
  const visibilityImg = visible ? hideImg : showImg;
  {
    if(data) {
      const name = data.name;
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
                onClick={() => setVisibility(!visible)}
                className={styles.img}
                src={visibilityImg}
              />
              <img
                id='info'
                onMouseOver={(e) => handleMouseOver(e)}
                onMouseOut={(e) => handleMouseOut(e)}
                onClick={(e) => handleInfoClick(e)}
                className={styles.img}
                src={infoImg}
              />
              <img
                id='collapse'
                onMouseOver={(e) => handleMouseOver(e)}
                onMouseOut={(e) => handleMouseOut(e)}
                onClick={(e) => handleCollapseClick(e)}
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
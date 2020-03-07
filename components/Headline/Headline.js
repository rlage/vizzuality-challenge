import React from 'react';
import dragDotsImg from '../../assets/drag-dots.svg';
import hideImg from '../../assets/hide.svg';
import infoImg from '../../assets/info.svg';
import arrowDownImg from '../../assets/arrow-down.svg';
import showImg from '../../assets/show.svg';
import styles from './Headline.module.css';
import Label from '../Label';

const Headline = ({ data, children }) => {
  console.log("data: ", data)
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
              <img className={styles.img} src={hideImg} />
              <img className={styles.img} src={infoImg} />
              <img className={styles.img} src={arrowDownImg} />
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
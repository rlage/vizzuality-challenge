import React from 'react';
import styles from './Basic.module.css'

const Label = ({ x, y, text }) => {
  return(
    <text className={styles.text} x={x} y={y}> {text} </text>
  )
}

export default Label;
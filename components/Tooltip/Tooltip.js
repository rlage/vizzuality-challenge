import React from 'react';
import styles from './Tooltip.module.css';

const Tooltip = ({ content, element }) => {
  const width = 100;
  const height = 42;
  const orientation = element ? element.y < 67 ? "bottom" : "top" : "top";
  // const x = element ? element.x - 100/2 + 16 : 0;
  // const y = element ? orientation === "bottom" ? element.y + 16 + 15 : element.y - height - 16 : 0;
  // const tooltipClass = orientation === "bottom" ? styles.tooltipBottom : styles.tooltip;

  const x = element ? element.x - 100/2 + 16 : 0;
  const y = element ? element.y - height - 16 : 0;
  const tooltipClass = styles.tooltip;

  if (element) {
    return (
      <div className={styles.container}>
        <div className={tooltipClass} style={
          {
            left: x,
            top: y,
            width: width,
            height: height,
          }
        }>
          <span className={styles.text}>{content}</span>
        </div>
        <div className={styles.arrow} />
      </div>
    );
  }
  return null;
};

export default Tooltip;

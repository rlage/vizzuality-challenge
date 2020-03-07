import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { dimensionsPropsType } from '../utils';
import styles from './Chart.module.css'

const ChartContext = createContext();
export const useChartDimensions = () => useContext(ChartContext);

export const Chart = ({ dimensions, children, cssClass}) => (
  <ChartContext.Provider value={dimensions}>
    <svg className={styles[cssClass]} width={dimensions.width}>
      <g transform={`translate(${dimensions.marginLeft}, ${dimensions.marginTop})`}>
        { children }
      </g>
    </svg>
  </ChartContext.Provider>
);

Chart.propTypes = {
  dimensions: dimensionsPropsType,
  children: PropTypes.node.isRequired
};

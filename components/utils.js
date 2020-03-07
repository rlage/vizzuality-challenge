import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export const accessorPropsType = (
  PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.number
  ])
);

export const callAccessor = (accessor, d, i) => (
  typeof accessor === 'function' ? accessor(d, i) : accessor
);

export const dimensionsPropsType = (
  PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    marginTop: PropTypes.number,
    marginRight: PropTypes.number,
    marginBottom: PropTypes.number,
    marginLeft: PropTypes.number
  })
);

export const combineChartDimensions = dimensions => {
  let parsedDimensions = {
    marginTop: 12,
    marginRight: 15,
    marginBottom: 15,
    marginLeft: 15,
    ...dimensions
  };
  const heightCalc =
    parsedDimensions.height -
    parsedDimensions.marginTop -
    parsedDimensions.marginBottom;
  const widthCalc =
    parsedDimensions.width -
    parsedDimensions.marginLeft -
    parsedDimensions.marginRight;
  return {
    ...parsedDimensions,
    boundedHeight: Math.max(heightCalc, 0),
    boundedWidth: Math.max(widthCalc, 0)
  };
};

export const useChartDimensions = passedSettings => {
  const ref = useRef();
  const dimensions = combineChartDimensions(passedSettings);

  const [width, changeWidth] = useState(0);
  const [height, changeHeight] = useState(0);

  useEffect(() => {
    if (dimensions.width && dimensions.height) return [ref, dimensions];

    const element = ref.current;
    const resizeObserver = new ResizeObserver(entries => {
      if (!Array.isArray(entries)) return;
      if (!entries.length) return;

      const entry = entries[0];

      if (width !== entry.contentRect.width) { changeWidth(entry.contentRect.width); } // eslint-disable-line
      if (height !== entry.contentRect.height) { changeHeight(entry.contentRect.height); } // eslint-disable-line
    });

    resizeObserver.observe(element);

    return () => resizeObserver.unobserve(element);
  }, [passedSettings, height, width, dimensions]);

  const newSettings = combineChartDimensions({
    ...dimensions,
    width: dimensions.width || width,
    height: dimensions.height || height
  });

  return [ref, newSettings];
};

let lastId = 0;
export const useUniqueId = (prefix = '') => {
  lastId++;
  return [prefix, lastId].join('-');
};

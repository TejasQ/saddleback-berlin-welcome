import React, { PropTypes } from 'react';

const Icon = props => (
  <svg className={`icon ${props.className}`} viewBox={props.svgData.viewBox}>
    <use xlinkHref={props.svgData.symbol} />
  </svg>
);

Icon.propTypes = {
  svgData: PropTypes.shape({
    symbol: PropTypes.string,
    viewBox: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;

import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './BackBtn.scss';
import Icon from '../icon';
import arrLeft from '../../assets/svg/icon-arrow-left.svg';


const BackBtn = props => (
  <Link to={props.to} className="back-btn">
    <Icon svgData={arrLeft} />
  </Link>
);

BackBtn.propTypes = {
  to: PropTypes.string,
};

BackBtn.defaultProps = {
  to: '/',
};

export default BackBtn;

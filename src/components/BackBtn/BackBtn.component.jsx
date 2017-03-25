import React from 'react';
import { Link } from 'react-router-dom';
import './BackBtn.scss';
import Icon from '../icon';
import arrLeft from '../../assets/svg/icon-arrow-left.svg';


export default () => (
  <Link to="/" className="back-btn">
    <Icon svgData={arrLeft} />
  </Link>
);

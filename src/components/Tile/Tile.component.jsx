import React, { PropTypes } from 'react';

import DotSeparator from '../DotSeparator/DotSeparator.component';

import './Tile.scss';

const TileComponent = props => (
  <section className={`tile ${props.className}`}>
    <h1 className="tile__heading">{props.title}</h1>
    {props.children && <DotSeparator />}
    {props.children && props.children}
  </section>
);

TileComponent.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.string,
};

TileComponent.defaultProps = {
  className: '',
  title: '',
  children: '',
};

export default TileComponent;

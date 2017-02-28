import React, { PropTypes } from 'react';

import DotSeparator from '../DotSeparator/DotSeparator.component';

import './Tile.scss';

const TileComponent = props => (
  <section className={`tile ${props.className}`}>
    <h2 className="tile__heading">{props.title}</h2>
    {props.children && <DotSeparator />}
    {props.children && <span className="tile__content">{props.children}</span>}
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

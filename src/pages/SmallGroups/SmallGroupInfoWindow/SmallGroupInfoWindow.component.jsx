import React from 'react';
import './SmallGroupInfoWindow.scss';

const SmallGroupInfoWindow = props => (
  <div className={`small-group-info-window ${props.className}`}>
    { props.picture && <img
      className="small-group-info-window__photo"
      alt={props.title}
      src={props.picture}
    /> }
    <div className="small-group-info-window__metadata">
      <header className="small-group-info-window__title">{props.title}</header>
      <p className="small-group-info-window__subtitle">{props.subtitle}</p>

      <div className="small-group-info-window__actions">
        <button
          className="small-group-info-window__button button button_wide gradient__navy_teal"
        >
          Request to Join
        </button>
      </div>
    </div>
  </div>
);

SmallGroupInfoWindow.propTypes = {
  picture: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string,
  className: React.PropTypes.string,
};

SmallGroupInfoWindow.defaultProps = {
  picture: '',
  subtitle: '',
  className: '',
};

export default SmallGroupInfoWindow;

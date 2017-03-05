import React from 'react';

const LinkListComponent = props => (
  <ul className="link-list" >
    {props.items.map(item =>
      <li key={item.id} >
        <header>{item.title}</header>
        {item.subtitle && <p>{item.subtitle}</p>}
      </li>)}
  </ul>
);

LinkListComponent.propTypes = {
  items: React.PropTypes.objectOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    link: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string,
  })).isRequired,
};

export default LinkListComponent;

import React from 'react';
import './LinkList.scss';

const LinkListComponent = props => (
  <ul className={`link-list ${props.className}`}>
    {props.items.map((item, index) =>
      <li className="link-list__item" key={item.id || index} >
        { item.picture && <img className="link-list__image" alt={item.title} src={item.picture} /> }
        <div>
          <header className="link-list__title">{item.title}</header>
          {item.subtitle && <p className="link-list__subtitle">{item.subtitle}</p>}
        </div>
      </li>)}
  </ul>
);

LinkListComponent.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  className: React.PropTypes.string,
};

LinkListComponent.defaultProps = {
  className: '',
};

export default LinkListComponent;

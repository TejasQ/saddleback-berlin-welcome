import React from 'react';

import Modal from '../../../components/Modal/Modal.component';

import './SmallGroupsContactModal.scss';

const SmallGroupsContactModal = props => (
  <Modal>
    <div className="small-groups-contact-modal">
      { props.group.picture && <div className="small-groups-contact-modal__left-pane">
        <img alt={props.group.title} src={props.group.picture} />
      </div> }
      <div className="small-groups-contact-modal__right-pane">
        <h2 className="small-groups-contact-modal__title">Join {props.group.title}!</h2>
        <p className="small-groups-contact-modal__subtitle">{props.group.description}</p>
      </div>
    </div>
  </Modal>
);

SmallGroupsContactModal.propTypes = {
  group: React.PropTypes.objectOf(React.PropTypes.shape({
    picture: React.PropTypes.string,
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string,
    description: React.PropTypes.string,
  })).isRequired,
};

export default SmallGroupsContactModal;

import React from 'react';
import './Modal.scss';

const Modal = props => (
  <div className="modal-overlay">
    <div className={`modal ${props.className}`}>
      {props.children}
    </div>
  </div>
);

Modal.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

Modal.defaultProps = {
  className: '',
};

export default Modal;

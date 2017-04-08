import React, { Component } from 'react';
import './Modal.scss';

class Modal extends Component {

  componentDidMount() {
    document.addEventListener('keyup', this.props.close);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.props.close);
  }

  render() {
    return (<div className="modal-overlay">
      <div className={`modal ${this.props.className}`} >
        {this.props.children}
      </div>
    </div>);
  }
}

Modal.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
  close: React.PropTypes.func.isRequired,
};

Modal.defaultProps = {
  className: '',
};

export default Modal;

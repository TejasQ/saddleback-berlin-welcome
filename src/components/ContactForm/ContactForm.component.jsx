import React from 'react';
import './ContactForm.scss';

const ContactForm = props => (
  <form className={`contact-form form ${props.className}`}>
    <div className="contact-form__input-container input-container">
      <input
        className="contact-form__input input-container__input"
        placeholder="Your Name"
      />
    </div>
    <div className="contact-form__input-container input-container">
      <input
        className="contact-form__input input-container__input"
        placeholder="Your Email"
      />
    </div>
    <div className="contact-form__input-container input-container">
      <textarea
        className="contact-form__input input-container__input input-container__input_multiline"
        placeholder="Your Message"
      />
    </div>
    <div className="form__button">
      <button
        className="button button_wide gradient__navy_teal"
      >
        SEND MESSAGE
      </button>
    </div>
  </form>
);

ContactForm.propTypes = {
  className: React.PropTypes.string,
};

ContactForm.defaultProps = {
  className: null,
};

export default ContactForm;

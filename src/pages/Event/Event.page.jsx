import React, { PropTypes } from 'react';
import eventsData from '../Events/Events.data';

import ContactForm from '../../components/ContactForm/ContactForm.component';
import PageWithTitleLayout from '../../components/PageWithTitleLayout/PageWithTitleLayout.component';

import './Event.scss';

const EventPage = ({ match }) => {
  const itm = eventsData.find(el => el.id === +match.params.id);
  return (
    <PageWithTitleLayout
      className="event-page"
      pageTitle={itm.title}
      titleClass="title-row_black title-row_white-text"
      contentClass="event-page__content"
      backTo="/events"
    >
      <section className="event-page__info event-page__column">
        <h2>{itm.title}</h2>
        <div dangerouslySetInnerHTML={itm.descr} />
      </section>
      <section className="event-page__form-container event-page__column">
        <h2>Participate in the event</h2>
        <ContactForm />
      </section>
    </PageWithTitleLayout>
  );
};

EventPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};


export default EventPage;

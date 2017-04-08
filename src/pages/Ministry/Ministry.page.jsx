import React, { PropTypes } from 'react';
import ministriesData from '../Ministries/Ministries.data';

import ContactForm from '../../components/ContactForm/ContactForm.component';
import PageWithTitleLayout from '../../components/PageWithTitleLayout/PageWithTitleLayout.component';

import './Ministry.scss';

const MinistryPage = ({ match }) => {
  const itm = ministriesData.find(el => el.id === +match.params.id);
  return (
    <PageWithTitleLayout
      className="ministry-page"
      pageTitle={itm.title}
      titleClass="title-row_black title-row_white-text"
      contentClass="ministry-page__content"
    >
      <section className="ministry-page__info ministry-page__column">
        <h2>{itm.title}</h2>
        <div dangerouslySetInnerHTML={itm.descr} />
      </section>
      <section className="ministry-page__form-container ministry-page__column">
        <h2>Join this ministry</h2>
        <ContactForm />
      </section>
    </PageWithTitleLayout>
  );
};

MinistryPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};


export default MinistryPage;

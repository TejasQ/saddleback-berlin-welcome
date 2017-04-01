import React, { PropTypes } from 'react';
import BackBtn from '../../components/BackBtn/BackBtn.component';
import ministriesData from '../Ministries/Ministries.data';
import './Ministry.scss';

const MinistryPage = ({ match }) => {
  const itm = ministriesData.find(el => el.id === +match.params.id);
  return (
    <div className="ministry-page">
      <BackBtn to="/ministries" />
      <h1>Wellcome to the {itm.title} page</h1>
      <div className="page-content">
        <section className="ministry-info">
          <h2>{itm.title}</h2>
          <div dangerouslySetInnerHTML={itm.descr} />
        </section>
        <section className="join-ministry">
          <h2>Join this ministry</h2>
          <form>join form will be here</form>
        </section>
      </div>
    </div>
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

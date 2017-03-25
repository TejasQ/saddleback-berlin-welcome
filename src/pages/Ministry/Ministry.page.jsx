import React, { PropTypes } from 'react';
import BackBtn from '../../components/BackBtn/BackBtn.component';
import './Ministry.scss';

const MinistryPage = ({ match }) => (
  <div className="ministry-page">
    <BackBtn to="/ministries" />
    <h1>Ministry page title {match.params.id}</h1>
  </div>
);

MinistryPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};


export default MinistryPage;

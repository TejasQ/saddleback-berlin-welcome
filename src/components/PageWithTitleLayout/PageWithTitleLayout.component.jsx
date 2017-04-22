import React from 'react';
import BackBtn from '../BackBtn/BackBtn.component';
import './PageWithTitleLayout.scss';

const PageWithTitleLayout = props => (
  <div className={`page-with-title-layout ${props.className}`}>
    <BackBtn to={props.backTo} />
    <section
      className={`title-row ${props.titleClass}`}
    >
      <h1 className="page__heading">{props.pageTitle}</h1>
    </section>
    <div className={`page-with-title-layout__content ${props.contentClass}`} >
      {props.children}
    </div>
  </div>
);

PageWithTitleLayout.propTypes = {
  className: React.PropTypes.string,
  titleClass: React.PropTypes.string,
  pageTitle: React.PropTypes.string,
  contentClass: React.PropTypes.string,
  children: React.PropTypes.node,
  backTo: React.PropTypes.string,
};

PageWithTitleLayout.defaultProps = {
  className: null,
  titleClass: '',
  pageTitle: '',
  contentClass: '',
  children: (<div />),
  backTo: '/',
};

export default PageWithTitleLayout;

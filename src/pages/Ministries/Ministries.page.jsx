import React from 'react';
import { Link } from 'react-router-dom';
import PageWithTitleLayout from '../../components/PageWithTitleLayout/PageWithTitleLayout.component';
import Tile from '../../components/Tile/Tile.component';
import ministriesData from './Ministries.data';
import './Ministries.scss';

export default () => {
  const ministriesViewList = ministriesData.map(itm =>
    <Link key={itm.id} to={`/ministries/${itm.id}`}>
      <Tile
        className="tile_clear tile_half ministries-page__ministry"
        title={itm.title}
      >
        {itm.shortDesr}
      </Tile>
    </Link>,
  );

  return (
    <PageWithTitleLayout
      className="ministries-page"
      pageTitle="Ministries"
      titleClass="title-row_white-text gradient__navy_light-red"
      contentClass="ministries-page__ministries ministries"
    >
      <div className="ministries-page__ministries ministries">
        {ministriesViewList}
      </div>
    </PageWithTitleLayout>
  );
};

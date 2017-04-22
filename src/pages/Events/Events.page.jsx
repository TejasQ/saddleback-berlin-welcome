import React from 'react';
import { Link } from 'react-router-dom';
import PageWithTitleLayout from '../../components/PageWithTitleLayout/PageWithTitleLayout.component';
import Tile from '../../components/Tile/Tile.component';
import eventsData from './Events.data';
import './Events.scss';

export default () => {
  const eventsViewList = eventsData.map(itm =>
    <Link key={itm.id} to={`/events/${itm.id}`}>
      <Tile
        className="tile_clear tile_half events-page__ministry"
        title={itm.title}
      >
        {itm.shortDesr}
      </Tile>
    </Link>,
  );

  return (
    <PageWithTitleLayout
      className="events-page"
      pageTitle="events"
      titleClass="title-row_white-text gradient__navy_light-red"
      contentClass="events-page__events events"
    >
      <div className="events-page__events events">
        {eventsViewList}
      </div>
    </PageWithTitleLayout>
  );
};

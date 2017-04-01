import React from 'react';
import { Link } from 'react-router-dom';
import Tile from '../../components/Tile/Tile.component';
import BackBtn from '../../components/BackBtn/BackBtn.component';
import ministriesData from './Ministries.data';
import './Ministries.scss';

export default () => {
  const ministriesViewList = ministriesData.map(itm =>
    <Link key={itm.id} to={`/ministries/${itm.id}`}>
      <Tile title={itm.title}>{itm.shortDesr}</Tile>
    </Link>,
  );

  return (
    <div className="ministries-page">
      <BackBtn />
      <h1>Ministries</h1>
      <div className="tiles">
        {ministriesViewList}
      </div>
    </div>
  );
};

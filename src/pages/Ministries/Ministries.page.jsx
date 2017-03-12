import React from 'react';
// import { Link } from 'react-router-dom';
import Tile from '../../components/Tile/Tile.component';
import './Ministries.scss';

export default () => (
  <div className="ministries-page">
    <h1>Ministries</h1>
    <div className="tiles">
      <Tile title="Wellcome team" className="">
        Wellcome team short description.
      </Tile>
      <Tile title="Prais team" className="">
        Prais team short description.
      </Tile>
      <Tile title="Tech" className="">
        Tech team short description.
      </Tile>
      <Tile title="Prayer corner" className="">
        Prayer corner short description.
      </Tile>
      <Tile title="Youth ministry" className="">
        Youth ministiry short description.
      </Tile>
    </div>
  </div>
);

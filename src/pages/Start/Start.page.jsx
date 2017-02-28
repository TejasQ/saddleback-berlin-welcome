import React from 'react';
import { Link } from 'react-router-dom';
import Tile from '../../components/Tile/Tile.component';
import './Start.scss';

export default () => (
  <div className="start-page" >
    <h1>Welcome</h1>
    <div className="start-page__tiles" >
      <Link to="/small-groups" >
        <Tile title="Small Groups" className="gradient__navy_teal" >
          Get connected to community within Saddleback Berlin.
        </Tile>
      </Link>
      <Tile title="Ministries" className="gradient__navy_light-red" >
        Serve the body of Christ by getting involved.
      </Tile>
      <Tile title="Events" className="gradient__green_cyan" >
        The latest happenings at Saddleback Berlin.
      </Tile>
    </div>
  </div>
);

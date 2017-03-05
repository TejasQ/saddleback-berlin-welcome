import React, { Component } from 'react';

import SmallGroupsMap from './Map/Map.component';
import markers from './data/small-groups';
import BackBtn from '../../components/BackBtn/BackBtn.component';

import './SmallGroups.scss';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markers,
    };
  }

  handleMarkerClick(targetMarker) {
    this.setState({
      markers: this.state.markers.map((marker) => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true,
          };
        }
        return { ...marker, showInfo: false };
      }),
    });
  }

  handleMarkerClose(targetMarker) {
    this.setState({
      markers: this.state.markers.map((marker) => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false,
          };
        }
        return marker;
      }),
    });
  }

  render() {
    return (
      <div className="small-groups-page">
        <BackBtn />
        <div className="small-groups-page__left-pane">
          <SmallGroupsMap
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
            onMarkerClick={marker => this.handleMarkerClick(marker)}
            onMarkerClose={marker => this.handleMarkerClose(marker)}
            markers={this.state.markers}
          />
        </div>
        <div className="small-groups-page__right-pane">
          <h2>Small Groups</h2>
        </div>
      </div>);
  }
}

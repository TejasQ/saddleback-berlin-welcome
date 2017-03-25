import React, { Component } from 'react';

import markers from './data/markers';
import BackBtn from '../../components/BackBtn/BackBtn.component';
import LinkList from '../../components/LinkList/LinkList.component';

import SmallGroupsMap from './Map/Map.component';
import SmallGroupsContactModal from './SmallGroupsContactModal/SmallGroupsContactModal.component';

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
        { this.state.activeGroup && <SmallGroupsContactModal group={this.state.activeGroup} /> }
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
          <p>Below are a list of available small groups that
          meet regularly. Tap on a small group for more details.</p>
          <LinkList
            className="small-groups-page__link-list"
            items={this.state.markers}
          />
        </div>
      </div>);
  }
}

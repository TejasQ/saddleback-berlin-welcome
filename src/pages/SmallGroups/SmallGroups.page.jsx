import React, { Component } from 'react';
import { GoogleMap, Marker, InfoWindow, withGoogleMap } from 'react-google-maps';

import './SmallGroups.scss';

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={12}
    defaultCenter={{ lat: 52.5076678, lng: 13.3857227 }}
    onClick={props.onMapClick}
  >
    {props.markers.map(marker => (
      <Marker
        key={marker.key}
        position={marker.position}
        onClick={() => props.onMarkerClick(marker)}
      >
        {marker.showInfo && (
          <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
            <div>{marker.infoContent}</div>
          </InfoWindow>
        )}
      </Marker>
    ))}
  </GoogleMap>
));

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          key: 0,
          position: { lat: 52.5283467, lng: 13.4115219 },
          infoContent: (<div>SUP DUDE</div>),
        },
        {
          key: 1,
          position: { lat: 52.4915966, lng: 13.3939156 },
          infoContent: (<div>SUP DAWG</div>),
        },
      ],
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
        return marker;
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
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: '100%' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
          onMarkerClick={marker => this.handleMarkerClick(marker)}
          onMarkerClose={marker => this.handleMarkerClose(marker)}
          markers={this.state.markers}
        />
      </div>);
  }
}

import React from 'react';
import { GoogleMap, Marker, InfoWindow, withGoogleMap } from 'react-google-maps';

const SmallGroupsMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={12}
    defaultCenter={{ lat: 52.5076678, lng: 13.3857227 }}
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

export default SmallGroupsMap;

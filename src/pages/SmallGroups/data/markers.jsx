import React from 'react';
import SmallGroupInfoWindow from '../SmallGroupInfoWindow/SmallGroupInfoWindow.component';

const markers = [
  {
    key: 0,
    position: { lat: 52.5283467, lng: 13.4115219 },
    title: 'Sebastian & Melanie',
    subtitle: 'Zähringerstraße 95, Berlin 10119',
    email: 'hello@tej.as',
    picture: 'http://lorempixel.com/200/200',
    description: 'This group meets on Wednesdays at 7pm in Berlin-Mitte. Please bring food!',
  },
  {
    key: 1,
    position: { lat: 52.4915966, lng: 13.3939156 },
    title: 'Dave & Jenny',
    subtitle: 'Charlottenburg 24, Berlin 12345',
    email: 'dave@saddleback.de',
    picture: 'http://lorempixel.com/200/200/people',
    description: 'This group meets on Wednesdays at 7pm in Berlin-Mitte. Please bring food!',
  },
];

const markersWithInfoWindows = [];

markers.map((marker) => {
  const newMarker = { ...marker };

  newMarker.infoContent = (<SmallGroupInfoWindow
    title={newMarker.title}
    subtitle={newMarker.subtitle}
    picture={newMarker.picture}
  />);

  markersWithInfoWindows.push(newMarker);
  return markersWithInfoWindows;
});

export default markersWithInfoWindows;

import { BaseIconOptions, Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { useEffect, useRef } from 'react';

import { City, Location } from '../../types/offer';

import useMap from '../../hooks/use-map/use-map';

enum MarkerIconUrl {
  Default = './img/pin.svg',
  Active = './img/pin-active.svg',
}

const iconParams = {
  iconSize: [28, 40],
  iconAnchor: [14, 40],
};

const defaultIcon = new Icon({
  ...iconParams,
  iconUrl: MarkerIconUrl.Default,
} as BaseIconOptions);

/*
Активная иконка маркера на будущее

const activeIcon = new Icon({
  ...iconParams,
  iconUrl: MarkerIconUrl.Active,
} as BaseIconOptions);
*/

type MapProps = {
  cssClass: string;
  city: City;
  points: Location[];
};

function Map(props: MapProps) {
  const {cssClass, city, points} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });

        marker
          .setIcon(defaultIcon)
          .addTo(map);
      });
    }
  }, [map, city, points]);

  return (
    <section
      className={`map ${cssClass}`}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;

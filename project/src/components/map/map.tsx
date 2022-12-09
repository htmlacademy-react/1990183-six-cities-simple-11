import { useCallback, useEffect, useRef } from 'react';

import { BaseIconOptions, Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { Location } from '../../types/offer';

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

const activeIcon = new Icon({
  ...iconParams,
  iconUrl: MarkerIconUrl.Active,
} as BaseIconOptions);

type MapProps = {
  cssClass: string;
  center: Location;
  points: Location[];
  activePoint: Location | null;
};

function Map(props: MapProps) {
  const {cssClass, center, points, activePoint} = props;

  const mapRef = useRef(null);
  const markersRef = useRef<Marker[]>([]);
  const map = useMap(mapRef, center);

  const isPointActive = useCallback(
    (point: Location) => {
      const isLatitudeMatch = (point.latitude === activePoint?.latitude);
      const isLongitudeMatch = (point.longitude === activePoint?.longitude);

      return (isLatitudeMatch && isLongitudeMatch);
    },
    [activePoint]
  );

  useEffect(() => {
    if (map) {
      map.flyTo(
        [center.latitude, center.longitude],
        center.zoom
      );

      markersRef.current.forEach((markerItem) => markerItem.remove());

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });

        isPointActive(point)
          ? marker.setIcon(activeIcon)
          : marker.setIcon(defaultIcon);

        marker.addTo(map);
        markersRef.current.push(marker);
      });
    }
  }, [map, center, points, activePoint, isPointActive]);

  return (
    <section
      className={`map ${cssClass}`}
      ref={mapRef}
      data-testid="map"
    >
    </section>
  );
}

export default Map;

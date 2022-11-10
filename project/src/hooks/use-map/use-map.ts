import { Map, TileLayer } from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';

import { City } from '../../types/offer';

const LAYER_URL_TEMPLATE = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City
): Map | null {

  const [map, setMap] = useState<Map | null>(null);
  const isRenderRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      const layer = new TileLayer(LAYER_URL_TEMPLATE);

      instance.addLayer(layer);
      setMap(instance);
      isRenderRef.current = true;
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;

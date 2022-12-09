import { useRef } from 'react';
import { renderHook } from '@testing-library/react';
import { Map } from 'leaflet';

import { createFakeLocation } from '../../utils/mocks';
import useMap from './use-map';

describe('Hook: useMap', () => {
  it('should return Map instance', () => {
    const {result} = renderHook(() => {
      const fakeMapElement = document.createElement('section');
      const fakeMapRef = useRef(fakeMapElement);
      const fakeLocation = createFakeLocation();

      return useMap(fakeMapRef, fakeLocation);
    });
    const map = result.current;

    expect(map).toBeInstanceOf(Map);
  });
});

import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoute, CITIES } from '../../const';

import { useAppDispatch } from '../../hooks';

import { changeCity } from '../../store/offers/actions';

const getRandomCity = () => {
  const randomIndex = Math.floor(Math.random() * CITIES.length);

  return CITIES[randomIndex];
};

function RandomLocation() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const location = getRandomCity();

  const handleLocationClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    dispatch(changeCity(location));
    navigate(AppRoute.Root);
  };

  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <a
          className="locations__item-link"
          href="#location"
          onClick={handleLocationClick}
        >
          <span>{location}</span>
        </a>
      </div>
    </section>
  );
}

export default RandomLocation;

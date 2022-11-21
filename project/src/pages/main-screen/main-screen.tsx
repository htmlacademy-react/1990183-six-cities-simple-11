import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/offers/actions';

import Header from '../../components/header/header';
import LocationNav from '../../components/location-nav/location-nav';
import Sorting from '../../components/sorting/sorting';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import Loader from '../../components/loader/loader';

function MainScreen() {
  const areOffersLoading = useAppSelector((state) => state.offers.areOffersLoading);

  const currentCity = useAppSelector((state) => state.offers.currentCity);
  const offers = useAppSelector((state) => state.offers.offers);
  const cities = useAppSelector((state) => state.offers.cities);

  const dispatch = useAppDispatch();

  if (areOffersLoading || currentCity === null) {
    return <Loader />;
  }

  const cityNames = cities.map((city) => city.name);
  const currentOffers = offers.filter((offer) => offer.city.name === currentCity.name);

  return (
    <div className="page page--gray page--main">
      <Header hasNavigation />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <LocationNav
          locations={cityNames}
          currentLocation={currentCity.name}
          onLocationChange={(cityName: string) => {
            dispatch(changeCity(cityName));
          }}
        />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>

              <b className="places__found">
                {`${currentOffers.length} places to stay in ${currentCity.name}`}
              </b>

              <Sorting />

              <OfferList
                cssClass='cities__places-list tabs__content'
                offers={currentOffers}
              />
            </section>

            <div className="cities__right-section">
              <Map
                cssClass="cities__map"
                city={currentCity}
                points={currentOffers.map((offer) => offer.location)}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;

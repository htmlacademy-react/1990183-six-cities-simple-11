type LocationNavProps = {
  locations: string[];
  currentLocation: string;
  onLocationChange: (city: string) => void;
};

function LocationNav(props: LocationNavProps) {
  const { locations, currentLocation, onLocationChange } = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locations.map((city) => {
            const isActive = (city === currentLocation);

            return (
              <li key={city} className="locations__item">
                <a
                  className={`
                    locations__item-link
                    tabs__item
                    ${ isActive ? 'tabs__item--active' : ''}
                  `}
                  href={`#${city}`}
                  onClick={(evt) => {
                    evt.preventDefault();
                    onLocationChange(city);
                  }}
                >
                  <span>{city}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default LocationNav;

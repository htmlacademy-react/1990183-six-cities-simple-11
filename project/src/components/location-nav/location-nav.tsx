type LocationNavProps = {
  locations: string[];
  currentLocation: string;
  onLocationChange: (location: string) => void;
};

function LocationNav(props: LocationNavProps) {
  const { locations, currentLocation, onLocationChange } = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locations.map((location) => {
            const isActive = (location === currentLocation);

            return (
              <li key={location} className="locations__item">
                <a
                  className={`
                    locations__item-link
                    tabs__item
                    ${ isActive ? 'tabs__item--active' : ''}
                  `}
                  href={`#${location}`}
                  onClick={(evt) => {
                    evt.preventDefault();
                    onLocationChange(location);
                  }}
                >
                  <span>{location}</span>
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

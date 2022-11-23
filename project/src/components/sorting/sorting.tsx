import { memo, useState } from 'react';

enum SortingLabel {
  Popular = 'Popular',
  PriceToHigh = 'Price: low to high',
  PriceToLow = 'Price: high to low',
  TopRate = 'Top rated first',
}

function Sorting() {
  const [isDropdownOpened, setDropdownOpenedStatus] = useState<boolean>(false);
  const [activeOption, setActiveOption] = useState<string>(SortingLabel.Popular);

  const handleLabelClick = () => setDropdownOpenedStatus((prevStatus) => !prevStatus);

  const handleOptionClick = (label: SortingLabel) => {
    setActiveOption(label);
    setDropdownOpenedStatus(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>

      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleLabelClick}
      >
        {activeOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul
        className={`
          places__options
          places__options--custom
          ${isDropdownOpened ? 'places__options--opened' : ''}
        `}
      >
        {Object.keys(SortingLabel).map((key) => {
          const label = SortingLabel[key as keyof typeof SortingLabel];
          const activeClass = (label === activeOption) ? 'places__option--active' : '';

          return (
            <li
              key={label}
              className={`places__option ${activeClass}`}
              tabIndex={0}
              onClick={() => handleOptionClick(label)}
            >
              {label}
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export default memo(Sorting);

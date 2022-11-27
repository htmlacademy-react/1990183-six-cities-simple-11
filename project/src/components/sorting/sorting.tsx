import { memo, useState } from 'react';

import { SortType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sortOffers } from '../../store/offers/actions';

enum SortLabel {
  Popular = 'Popular',
  PriceToHigh = 'Price: low to high',
  PriceToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

function Sorting() {
  const activeSortType = useAppSelector((state) => state.offers.sortType);

  // TODO: подумать над универсальной функцией
  const getLabelByType = (sortType: SortType) => {
    const currentKey = Object.keys(SortType).find(
      (key) => SortType[key as keyof typeof SortType] === sortType
    );

    return SortLabel[currentKey as keyof typeof SortLabel];
  };

  const [isDropdownOpened, setDropdownOpenedStatus] = useState<boolean>(false);
  const [activeOption, setActiveOption] = useState<string>(getLabelByType(activeSortType));

  const dispatch = useAppDispatch();

  const handleLabelClick = () => setDropdownOpenedStatus((prevStatus) => !prevStatus);

  const handleOptionClick = (label: SortLabel, value: SortType) => {
    setActiveOption(label);
    setDropdownOpenedStatus(false);
    dispatch(sortOffers(value));
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
        {Object.keys(SortType).map((key) => {
          const label = SortLabel[key as keyof typeof SortLabel];
          const value = SortType[key as keyof typeof SortType];
          const activeClass = (label === activeOption) ? 'places__option--active' : '';

          return (
            <li
              key={value}
              className={`places__option ${activeClass}`}
              tabIndex={0}
              onClick={() => handleOptionClick(label, value)}
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

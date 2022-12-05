import { memo, useState } from 'react';

import { SortType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sortOffers } from '../../store/offers/actions';

const SortLabel = {
  [SortType.Popular]: 'Popular',
  [SortType.PriceToHigh]: 'Price: low to high',
  [SortType.PriceToLow]: 'Price: high to low',
  [SortType.TopRated]: 'Top rated first',
} as const;

function Sorting() {
  const activeSortType = useAppSelector((state) => state.offers.sortType);

  const [isDropdownOpened, setDropdownOpenedStatus] = useState<boolean>(false);
  const [activeOption, setActiveOption] = useState<string>(SortLabel[activeSortType]);

  const dispatch = useAppDispatch();

  const handleLabelClick = () => setDropdownOpenedStatus((prevStatus) => !prevStatus);

  const handleOptionClick = (label: string, value: SortType) => {
    setActiveOption(label);
    setDropdownOpenedStatus(false);
    dispatch(sortOffers(value));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>{' '}

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
        {Object.values(SortType).map((value) => {
          const label = SortLabel[value];
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

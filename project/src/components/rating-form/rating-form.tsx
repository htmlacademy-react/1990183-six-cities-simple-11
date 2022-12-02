import { Fragment, ChangeEvent, memo } from 'react';

type RatingFormProps = {
  rating: number | null;
  onRate: (evt: ChangeEvent<HTMLInputElement>) => void;
};

const ratingStars: string[] = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
];

function RatingForm(props: RatingFormProps) {
  const {rating, onRate} = props;

  return (
    <div className="reviews__rating-form form__rating">
      {ratingStars.map((title, index, array) => {
        const value = array.length - index;

        return (
          <Fragment key={title}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              checked={rating === value}
              onChange={onRate}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        );
      })}
    </div>
  );
}

export default memo(RatingForm);

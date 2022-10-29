const ratingStars: string[] = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
];

function RatingForm() {
  return (
    <div className="reviews__rating-form form__rating">
      {ratingStars.map((title, index, array) => {
        const value = array.length - index;

        return (
          <>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
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
          </>
        );
      })}
    </div>
  );
}

export default RatingForm;

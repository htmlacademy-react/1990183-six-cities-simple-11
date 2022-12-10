type RatingProps = {
  value: number;
  wrapperCssClass: string;
  starsCssClass: string;
  valueCssClass: string | null;
};

const MAX_STARS_QUANTITY = 5;

function Rating(props: RatingProps) {
  const {
    value,
    wrapperCssClass,
    starsCssClass,
    valueCssClass } = props;

  const percentValue = Math.round(value) / MAX_STARS_QUANTITY * 100;

  return (
    <div
      className={`${wrapperCssClass} rating`}
      data-testid="rating-wrapper"
    >

      <div
        className={`${starsCssClass} rating__stars`}
        data-testid="rating-stars"
      >
        <span style={{ width: `${percentValue}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>

      {
        valueCssClass &&
          <span
            className={`${valueCssClass} rating__value`}
            data-testid="rating-value"
          >
            {value}
          </span>
      }

    </div>
  );
}

export default Rating;

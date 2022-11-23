import { Review } from '../../types/review';
import { formatDate } from '../../utils';
import Rating from '../rating/rating';

type ReviewItemProps = {
  review: Review;
};

function ReviewItem({review}: ReviewItemProps) {
  const {user} = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt={user.name}
          />
        </div>

        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>

      <div className="reviews__info">
        <Rating
          value={review.rating}
          wrapperCssClass='reviews__rating'
          starsCssClass='reviews__stars'
          valueCssClass={null}
        />

        <p className="reviews__text">
          {review.comment}
        </p>

        <time className="reviews__time" dateTime={review.date}>
          {formatDate(review.date)}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;

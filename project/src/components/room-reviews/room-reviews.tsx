import { AuthStatus } from '../../const';

import { Review } from '../../types/review';

import { useAppSelector } from '../../hooks';

import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';

const MAX_REVIEWS_QUANTITY = 10;

type RoomReviewsProps = {
  reviews: Review[];
};

function RoomReviews({reviews}: RoomReviewsProps) {
  const authStatus = useAppSelector((state) => state.user.authStatus);

  const handleDateSort = (review: Review, nextReview: Review) =>
    Date.parse(nextReview.date) - Date.parse(review.date);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>

      <ReviewList
        reviews={reviews}
        maxLength={MAX_REVIEWS_QUANTITY}
        onSort={handleDateSort}
      />

      {
        (authStatus === AuthStatus.Auth) && <ReviewForm />
      }
    </section>
  );
}

export default RoomReviews;

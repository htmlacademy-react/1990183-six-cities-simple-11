import { AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { Review } from '../../types/review';
import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';

type RoomReviewsProps = {
  reviews: Review[];
};

function RoomReviews({reviews}: RoomReviewsProps) {
  const authStatus = useAppSelector((state) => state.user.authStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>

      <ReviewList reviews={reviews} />

      {authStatus === AuthStatus.Auth && <ReviewForm />}
    </section>
  );
}

export default RoomReviews;

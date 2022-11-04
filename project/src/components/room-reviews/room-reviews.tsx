import { Review } from '../../types/review';
import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';

type RoomReviewsProps = {
  reviews: Review[];
};

function RoomReviews({reviews}: RoomReviewsProps) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>

      <ReviewList reviews={reviews} />

      <ReviewForm />
    </section>
  );
}

export default RoomReviews;

import { Review } from '../../types/review';
import ReviewItem from '../review-item/review-item';

type ReviewListProps = {
  reviews: Review[];
  maxLength: number;
};

function ReviewList(props: ReviewListProps) {
  const {reviews, maxLength} = props;
  const visibleReviews = reviews.slice(0, maxLength);

  return (
    <ul className="reviews__list">
      {visibleReviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ul>
  );
}

export default ReviewList;

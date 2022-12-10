import { Review } from '../../types/review';
import ReviewItem from '../review-item/review-item';

type ReviewListProps = {
  reviews: Review[];
  maxLength: number;
  onSort: (review: Review, nextReview: Review) => number;
};

function ReviewList(props: ReviewListProps) {
  const {reviews, maxLength, onSort} = props;

  const visibleReviews = reviews.slice(0, maxLength).sort(onSort);

  return (
    <ul className="reviews__list" data-testid="list">
      {visibleReviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ul>
  );
}

export default ReviewList;

import { useState, ChangeEvent, useCallback } from 'react';

import RatingForm from '../rating-form/rating-form';

enum ReviewLength {
  Min = 50,
  Max = 300,
}

function ReviewForm() {
  const [rating, setRating] = useState<number | null>(null);
  const [review, setReview] = useState<string>('');

  const isRatingEmpty = (rating === null);
  const isReviewTooShort = (review.length < ReviewLength.Min);
  const isReviewTooLong = (review.length > ReviewLength.Max);
  const isFormInValid = isRatingEmpty || isReviewTooShort || isReviewTooLong;

  const ratingChangeHandle = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      const value = Number(evt.target.value);

      setRating(value);
    }, []
  );

  const textareaChangeHandle = useCallback(
    (evt: ChangeEvent<HTMLTextAreaElement>) => {
      const value = evt.target.value;

      if (value.length > ReviewLength.Max) {
        return;
      }

      setReview(value);
    }, []
  );

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>

      <RatingForm
        rating={rating}
        onRate={ratingChangeHandle}
      />

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={textareaChangeHandle}
        value={review}
      >
      </textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span>{' '}
          and describe your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>

        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isFormInValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;

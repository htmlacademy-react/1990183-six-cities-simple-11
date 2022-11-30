import './review-form.css';

import { useState, ChangeEvent, useCallback, FormEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendReviewAction } from '../../store/offer/api-actions';

import RatingForm from '../rating-form/rating-form';

enum ReviewLength {
  Min = 50,
  Max = 300,
}

function ReviewForm() {
  const [rating, setRating] = useState<number | null>(null);
  const [review, setReview] = useState<string>('');

  const offerId = useAppSelector((state) => state.offer.offer?.id);
  const isSending = useAppSelector((state) => state.offer.isReviewSending);
  const isSentSuccessfully = useAppSelector((state) => state.offer.isReviewSentSuccessfully);

  const disabledClass = isSending ? 'reviews__form--disabled' : '';

  const dispatch = useAppDispatch();

  const isRatingEmpty = (rating === null);
  const isReviewTooShort = (review.length < ReviewLength.Min);
  const isReviewTooLong = (review.length > ReviewLength.Max);
  const isFormInValid = isRatingEmpty || isReviewTooShort || isReviewTooLong;

  const handleRatingChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      const value = Number(evt.target.value);

      setRating(value);
    }, []
  );

  const handleTextareaChange = useCallback(
    (evt: ChangeEvent<HTMLTextAreaElement>) => {
      const value = evt.target.value;
      const isValueTooLong = (value.length > ReviewLength.Max);

      if (isValueTooLong) {
        return;
      }

      setReview(value);
    }, []
  );

  const handleFormSubmit = useCallback(
    (evt: FormEvent) => {
      evt.preventDefault();

      if (review === '' || rating === null || offerId === undefined) {
        return;
      }

      dispatch(sendReviewAction({
        id: offerId,
        comment: review,
        rating,
      }));
    }, [dispatch, offerId, rating, review]
  );

  useEffect(() => {
    if (isSentSuccessfully) {
      setReview('');
      setRating(null);
    }
  }, [isSentSuccessfully]);

  return (
    <form
      className={`reviews__form form ${disabledClass}`}
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>

      <RatingForm
        rating={rating}
        onRate={handleRatingChange}
      />

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleTextareaChange}
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

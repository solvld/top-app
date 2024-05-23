'use client';
import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useState,
  KeyboardEvent,
} from 'react';
import StarIcon from 'public/star.svg';
import styles from './styles.module.css';
import clsx from 'clsx';

interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  setRating?(rating: number): void;
}

export function Rating({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>),
  );

  useEffect(() => {
    constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => (
      <span
        key={i}
        className={clsx(
          styles.star,
          i < currentRating && styles.filled,
          isEditable && styles.editable,
        )}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
        onClick={() => onClick(i + 1)}
      >
        <StarIcon
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
            isEditable && handleSpace(i + 1, e)
          }
        />
      </span>
    ));
    setRatingArray(updatedArray);
  };

  const changeDisplay = (index: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(index);
  };
  const onClick = (index: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(index);
  };

  const handleSpace = (index: number, e: KeyboardEvent<SVGAElement>) => {
    if (e.code != 'Space' || !setRating) {
      return;
    }
    setRating(index);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
}

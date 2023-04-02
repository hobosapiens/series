import { FC } from 'react';

import styles from './Rating.module.scss';

const Rating: FC<{ value: number | null }>  = ({ value = 0 }) => {
  const MAX_STARS: number = 10;
  const fullStars: number = Math.floor(Number(value));
  const hasHalfStar: boolean = Number(value) % 1 !== 0;
  const emptyStars: number = MAX_STARS - fullStars - (hasHalfStar ? 1 : 0);

  const renderStar = (
      type: 'full' | 'half' | 'empty', 
      index?: number
    ): JSX.Element => {
    return (
      <i
        className={`fa fa-star${type === 'empty' ? '-o' : type === 'half' ? '-half-o' : ''}`}
        aria-hidden="true"
        key={`star-${index}`}
      />
    )
  };
  
  return (
    <div className={styles.rating}>
      {[...Array(fullStars)].map((_, index) => renderStar('full', index))}
      {hasHalfStar && renderStar('half')}
      {[...Array(emptyStars)].map((_, index) => renderStar('empty', index))}
    </div>
  );
}

export default Rating
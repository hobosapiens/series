import PropTypes from 'prop-types';

import styles from './Rating.module.scss';

const Rating = ({ value = 0 }) => {
  const MAX_STARS = 10;
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 !== 0;
  const emptyStars = MAX_STARS - fullStars - (hasHalfStar ? 1 : 0);

  const renderStar = (type, index) => {
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

Rating.propTypes = {
    value: PropTypes.number
}

export default Rating
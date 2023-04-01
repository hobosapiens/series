import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import noImage from '@/static/no-image.png'
import Rating from '@/components/Rating';

import styles from './ListItem.module.scss';

const ListItem = ({ image, name, rating, id }) => {
  return (
    <div className={styles.item}>
      <Link to={`/series/about/${id}`} className={styles.link}>
        <img className={styles.img} src={image ? image : noImage} alt={name} />
      </Link>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.rating}>
          <Rating value={rating} />
        </div>
      </div>
    </div>
  )
}

ListItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  rating: PropTypes.number,
  id: PropTypes.number,
}

export default ListItem;
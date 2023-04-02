import { FC } from 'react';
import { Link } from 'react-router-dom';

import noImage from '@/static/no-image.png'
import Rating from '@/components/Rating';
import { IShow } from '@/types/types';

import styles from './ListItem.module.scss';

interface ListItemProps {
  show: IShow
}

const ListItem: FC<ListItemProps> = ({ show }) => {
  const { id, image, name, rating } = show;

  return (
    <li className={styles.item}>
      <Link to={`/series/about/${id}`} className={styles.link}>
        <img className={styles.img} src={image ? image : noImage} alt={name} />
      </Link>
      <h5 className={styles.name}>{name}</h5>
      <Rating value={rating} />
    </li>
  )
}

export default ListItem;
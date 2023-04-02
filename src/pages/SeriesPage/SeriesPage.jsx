import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router";

import { searchSeries } from '@/store/reducers'
import ListItem from '@/components/ListItem';
import Header from '@/components/Header';
import Loader from '@/components/Loader';

import styles from './SeriesPage.module.scss';

const SeriesPage = () => {
  const dispatch = useDispatch();
  const { query } = useParams()
  const { series, isLoading, isError } = useSelector(state => state);

  useEffect(() => {
    dispatch(searchSeries(query));
  }, [query]);

  return (
    <div className={styles.series}>
      <Header />
      <main>
        {isError
          ? <h2 className={styles.error}>Error getting series data!</h2>
          : isLoading
            ? <Loader />
            : !!series.length
              ? <SeriesList series={series} />
              : <h2 className={styles.no_result}>No results found for: «{ query }»</h2>
        }
      </main>
    </div>
  )
}

const SeriesList = ({ series }) => {
  return (
    <ul className={styles.list}>
      {series?.map(show => (
        <ListItem
          key={show.id} 
          id={show.id}
          name={show.name}
          rating={show.rating}
          image={show.image}
        />
      ))}
    </ul>
  )
}
  
export default SeriesPage
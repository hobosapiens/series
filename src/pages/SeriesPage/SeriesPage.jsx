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
  const seriesFromStore = useSelector(state => state.series);

  useEffect(() => {
    dispatch(searchSeries(query));
  }, [query]);

  return (
    <div className={styles.series}>
      <Header />
      {seriesFromStore?.length
          ? (
              <ul className={styles.list}>
                  {seriesFromStore?.map(show => (
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
          : <Loader />
      }
    </div>
  )
}
  
export default SeriesPage
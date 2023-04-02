import { useEffect, FC } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router";

import { searchSeries } from '@/store/reducers'
import ListItem from '@/components/ListItem';
import Header from '@/components/Header';
import Loader from '@/components/Loader';

import styles from './SeriesPage.module.scss';
import { IShow, IState } from "@/types/types";

const SeriesPage = () => {
  const dispatch = useDispatch();
  const { query } = useParams()
  const { series, isLoading, isError } = useSelector((state: IState) => state);

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

interface SeriesListProps {
  series: IShow[]
}

const SeriesList: FC<SeriesListProps> = ({ series }) => {
  return (
    <ul className={styles.list}>
      {series?.map(show => (
        <ListItem show={show} key={show.id} />
      ))}
    </ul>
  )
}
  
export default SeriesPage
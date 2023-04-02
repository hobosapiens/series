import { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux';

import Header from '@/components/Header';
import Loader from '@/components/Loader';
import Rating from '@/components/Rating';
import BackButton from "@/components/BackButton";
import { getSingleShow } from '@/store/reducers'
import noImage from '@/static/no-image.png'

import styles from './AboutPage.module.scss';

const AboutPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams()
  const { singleShow, isLoading, isError} = useSelector(state => state);

  useEffect(() => {
    dispatch(getSingleShow(id));
  }, [id]);

  return (
    <div className={styles.about}>
      <Header />
      <main>
        <BackButton />  
        {isError
          ? <h2 className={styles.error}>Error getting series data!</h2>
          : isLoading
            ? <Loader />
            : <ShowInfo singleShow={singleShow} />
        }
      </main>
    </div>
  )
}

const ShowInfo = ({ singleShow }) => {
  const { image, name, rating, genres, summary, cast } = singleShow;
  const separatedGenres = genres?.join(" | ");

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <div className={styles.info}>
      <div className={styles.poster}>
        <img src={image ? image : noImage } alt={name} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.details}>
          <h2 className={styles.name}>{name}</h2>
          <Rating value={rating} />
          {!!genres?.length && 
            <h4 className={styles.genres}>
              <b>Genres: </b>
              {separatedGenres}
            </h4>
          }
          {summary &&
            <p className={styles.summary}>
              {summary && removeTags(summary)}
            </p>
          }
        </div>
        {!!cast?.length &&
          <>
            <h3 className={styles.cast}>Cast</h3>
            <ul className={styles.actors}>
              {cast?.map((actor, index) => (
                <li key={index} className={styles.actor}>
                  <div className={styles.actor_photo}>
                    <img 
                      src={actor.person.image ? actor.person.image?.medium : noImage} 
                      alt={actor.person.name} 
                    />
                  </div>
                  <div className={styles.actorInfo}>
                    <h5 className={styles.actor_name}>{actor.person.name}</h5>
                    <span className={styles.character_name}>as {actor.character.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </>
        }
      </div>
    </div>
  )
}

export default AboutPage
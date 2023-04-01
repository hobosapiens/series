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
      <BackButton />
      {isError
        ? <h2>Error getting series data!</h2>
        : isLoading
          ? <Loader />
          : <ShowInfo singleShow={singleShow} />
      }
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
          <div className={styles.name}>{name}</div>
          <div className={styles.rating}>
            <Rating value={rating} />
          </div>
          {!!genres?.length && 
            <div className={styles.genres}>
              <b>Genres: </b>
              {separatedGenres}
            </div>
          }
          {summary &&
            <div className={styles.summary}>
              {summary && removeTags(summary)}
            </div>
          }
        </div>
        {!!cast?.length &&
          <>
            <div className={styles.cast}>Cast</div>
            <div className={styles.actors}>
              {cast?.map((actor, index) => (
                <div key={index} className={styles.actor}>
                  <div className={styles.actor_photo}>
                    <img 
                      src={actor.person.image ? actor.person.image?.medium : noImage} 
                      alt={actor.person.name} 
                    />
                  </div>
                  <div className={styles.actorInfo}>
                    <div className={styles.actor_name}><b>{actor.person.name}</b></div>
                    <div className={styles.character_name}>as {actor.character.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default AboutPage
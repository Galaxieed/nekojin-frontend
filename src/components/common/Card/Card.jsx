import { useEffect, useState } from 'react';
import style from './Card.module.css';
import PropTypes from 'prop-types';
import { getAnimeInfo } from '../../../services/apicalls';

export default function MyCard(props) {
    const [isHovered, onHover] = useState(false);
    const [animeInfo, setAnimeInfo] = useState();

    useEffect(()=>{
        async function fetchData() {
            setAnimeInfo(await getAnimeInfo(props.animeId));
        }
        fetchData();
    }, [props.animeId]);
    console.log(animeInfo);
    return (
        animeInfo &&
        <div className={style.card}>
            <div className={style.cardImage} onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)}>
                <img src={animeInfo.image} alt=""/>
                {isHovered && <div className={style.cardHover}>
                    <h5>{animeInfo.description == "" ? "It has no description" : animeInfo.description}</h5>
                </div> }
            </div>
           
            <h4>{animeInfo.title}</h4>
        </div>
    )
}

MyCard.propTypes = {
    anime: PropTypes.any.isRequired,
    animeId: PropTypes.string.isRequired
}
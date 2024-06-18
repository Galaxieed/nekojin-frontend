import { useState } from 'react';
import style from './Card.module.css';
import PropTypes from 'prop-types';

export default function MyCard(props) {
    const [isHovered, onHover] = useState(false);

    return (
        <div className={style.card}>
            <div className={style.cardImage} onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)}>
                <img src={props.anime.image} alt=""/>
                {isHovered && <div className={style.cardHover}>
                    <p>{props.anime.sypnosis}</p>
                </div> }
            </div>
           
            <h4>{props.anime.title}</h4>
        </div>
    )
}

MyCard.propTypes = {
    anime: PropTypes.any.isRequired,
}
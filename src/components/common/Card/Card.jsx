import { useState } from 'react';
import style from './Card.module.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function MyCard(props) {
    const [isHovered, onHover] = useState(false);
    const navigate = useNavigate();

    const navigateToWatch = () => {
        navigate(`/watch/${props.anime.id}`);
    }

    return (
        <div className={style.card}>
            <div className={style.cardImage}
            onClick={navigateToWatch}
            onMouseEnter={() => onHover(true)} 
            onMouseLeave={() => onHover(false)}>
                <img src={props.anime.image} alt=""/>
                {props.anime.description != undefined && isHovered && <div className={style.cardHover}>
                    <h5>{props.anime.description == "" ? "It has no description" : props.anime.description}</h5>
                </div> }
            </div>
           
            <h4>{props.anime.title}</h4>
        </div>
    )
}

MyCard.propTypes = {
    anime: PropTypes.any.isRequired,
}
import style from './CardRoller.module.css';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from '@mui/icons-material/ArrowRight';
import { useRef, useState, useEffect } from 'react';
import MyCard from '../../common/Card/Card';
import PropTypes from 'prop-types'

export default function CardRoller(props) {
    var carouselRef  = useRef(null);
    const [scrollAmount, setScrollAmount] = useState(0);

    useEffect(() => {
        // Calculate the scroll amount when the component mounts
        if (carouselRef.current) {
            setScrollAmount(carouselRef.current.clientWidth * 0.8);
        }
        
        // Adjust scroll amount when the window is resized
        const handleResize = () => {
            if (carouselRef.current) {
                setScrollAmount(carouselRef.current.clientWidth * 0.8);
            }
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const scrollLeft = () => {
        carouselRef.current.scrollBy({
            left: -scrollAmount,  
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        carouselRef.current.scrollBy({
            left: scrollAmount,  
            behavior: 'smooth',
        });
    };
    console.log(props.animeList.results);

    return (
        <div className={style.container}>
            <button className={style.leftArrow} onClick={scrollLeft}><ArrowLeft /></button>
            <div className={style.carousel} ref={carouselRef}>
                {props.animeList.results != undefined && props.animeList.results.map((anime, index) => 
                    <MyCard key={index} anime={
                        {
                            title: anime.title,
                            image: anime.image,
                            sypnosis: `${anime.title} Episodes: ${anime.episodeNumber}`,
                        }
                    } animeId={anime.id}/>
                )}
            </div>
            <button className={style.rightArrow} onClick={scrollRight}><ArrowRight /></button>
        </div>
    )
}

CardRoller.propTypes = {
    animeList: PropTypes.any.isRequired,
}
import { useEffect, useState } from 'react';
import MyButton from '../../common/Button/Button';
import style from './Jumbotron.module.css';
import PlayIcon from '@mui/icons-material/PlayArrow';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import PropTypes from 'prop-types';

export default function MyJumbotron(props) {
    const theme = useTheme();
    const mdBreakPoint = useMediaQuery(theme.breakpoints.up('md'));
    const smBreakPoint = useMediaQuery(theme.breakpoints.up('sm'));

    const [currentSlide, setSlide] = useState(0);
    
    const nextSlide = () => {
        setSlide(currentSlide === props.animeList.length - 1 ? 0 : currentSlide + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    })

    const smContainerStyle = {
        height: "500px",
        alignItems: "flex-end",
    }

    const smDetailsStyle = {
        background: 'linear-gradient(transparent, black)',
        marginLeft: "0",
        marginBottom: "0",
        paddingTop: "100px",
    }

    return (
        <div className={`${style.container}`} style={{
            backgroundImage: `url(${props.animeList[currentSlide].image})`,
            ...!smBreakPoint && smContainerStyle
        }}>

            <div className={style.details} style={!smBreakPoint ? smDetailsStyle : undefined}>
                <h1>{props.animeList[currentSlide].title}</h1>
                { mdBreakPoint && <h5>{props.animeList[currentSlide].description}</h5>}
                { !smBreakPoint && <h5>{props.animeList[currentSlide].description}</h5>}
                <br />
                <MyButton isPrimary={true} icon={(<PlayIcon />)} text='Watch' onClick={()=>{}} />
            </div>

            { smBreakPoint && <div className={style.image} style={{backgroundImage: `url(${props.animeList[currentSlide].image})`}}></div>}

        </div>
    )
}

MyJumbotron.propTypes = {
    animeList: PropTypes.any.isRequired,
}
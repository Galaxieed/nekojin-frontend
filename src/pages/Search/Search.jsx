import { useState } from 'react';
import style from './Search.module.css';
import SearchIcon from '@mui/icons-material/SearchOutlined'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { getSearchedAnime } from '../../services/apicalls';
import MyCard from '../../components/common/Card/Card';

export default function Search() {
    const [animeResults, setAnimeResults] = useState([]);
    const theme = useTheme();
    const smBreakPoint = useMediaQuery(theme.breakpoints.up('sm'));
    const [isLoading, onLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        if (data.get('search')) {
            onLoading(true);
            const result = await getSearchedAnime(data.get('search'), 2);
            setAnimeResults(result.results);
            onLoading(false);
        }
    }


    return (
        <div className={style.container}>
            <div className={style.searchContainer}>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='search' className={style.input} placeholder="Search..." disabled={isLoading} />
                    <button type='submit' disabled={isLoading}><SearchIcon />{smBreakPoint && `Search`}</button>
                </form>
            </div>
            <div className={style.resultsContainer}>
                {
                    isLoading ? <h3>Loading...</h3> :
                    animeResults.length === 0 ? <h3>No results found</h3> :
                    <div className={style.gridContainer}>
                        {animeResults.map((anime, index) => {
                            return (
                                <MyCard key={index} anime={anime}/>
                                // <div key={index} className={style.result}>
                                //     <img src={anime.image} alt={anime.title} />
                                //     <h3>{anime.title}</h3>
                                // </div>
                            )
                        })}
                    </div>
                }
            </div>
           
        </div>
    )
}
import { useEffect, useRef, useState } from 'react';
import style from './Search.module.css';
import SearchIcon from '@mui/icons-material/SearchOutlined'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { getSearchedAnime } from '../../services/apicalls';
import MyCard from '../../components/common/Card/Card';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from '@mui/icons-material/ArrowRight';
import MyLoader from '../../components/common/Loader/Loader';
export default function Search() {
    const [animeResults, setAnimeResults] = useState([]);
    const [isLoading, onLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");
    const hasNextPage = useRef(false);

    const theme = useTheme();
    const smBreakPoint = useMediaQuery(theme.breakpoints.up('sm'));

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        if (data.get('search')) {
            setSearchValue(data.get('search'));
            setPage(1);
        }
    }

    const handlePage = (control) => {
        if (control === "next" && hasNextPage.current) setPage((prev)=> prev + 1)
        if (control === "prev" && page > 1) setPage((prev)=> prev - 1)
    }

    useEffect(() => {
        if (searchValue && searchValue != "") {
            onLoading(true);
            getSearchedAnime(searchValue, page).then((result) => {
                setAnimeResults(result.results);
                hasNextPage.current = result.hasNextPage;
                onLoading(false);
                window.scroll(0, 0);
            });
        }
    }, [searchValue, page])


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
                    animeResults.length === 0 ? <h3>No results found</h3> :
                    <>
                        { isLoading && <MyLoader />}
                        <div className={style.gridContainer}>
                            {animeResults.map((anime, index) => {
                                return (
                                    <div key={index} className={style.gridItem}>
                                        <MyCard anime={anime}/>
                                    </div>
                                )
                            })}
                        </div>

                        {!(page === 1 && !hasNextPage.current) && <div className={style.pageControl}>
                            {page > 1 && <button onClick={()=>handlePage("prev")}>
                                <ArrowLeft/>
                            </button>}
                            
                            {page > 1 &&<>•••<button onClick={()=>handlePage("prev")}>
                                {page - 1}
                            </button></>}

                            <button disabled>
                                {page}
                            </button>
                            
                            {hasNextPage.current && <><button onClick={()=>handlePage("next")}>
                                {page + 1}
                            </button>•••</>}

                            {hasNextPage.current && <button onClick={()=>handlePage("next")}>
                                <ArrowRight/>
                            </button>}
                        </div>}
                    </>
                    
                }
            </div>
           
        </div>
    )
}
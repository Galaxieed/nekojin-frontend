import CardRoller from '../../components/layout/CardRoller/CardRoller';
import MyJumbotron from '../../components/layout/Jumbotron/Jumbotron';
import { getTopAnimeAiring, getRecentEpisodes } from '../../services/apicalls';
import style from './Home.module.css';
import { useEffect, useRef, useState } from "react"
export default function MyHome() {
    const [topAnimeAiring, setTopAnimeAiring] = useState([]);
    const [recentEpisodes, setRecentEpisodes] = useState([]);
    let isLoading = useRef(true);

    useEffect(()=>{
        async function fetchData() {
            setTopAnimeAiring(await getTopAnimeAiring());
            setRecentEpisodes(await getRecentEpisodes());
        }
        fetchData().then(()=>{isLoading.current = false;});
    },[])

    return (
        isLoading.current ? <div>Loading</div>:
        <div className={style.home}>
            <section>
                <MyJumbotron />
            </section>

            <section>
                <div>
                    <h1>New Recent Episodes</h1>
                    <CardRoller animeList={recentEpisodes}/>
                </div>
            </section>

            <section>
                <div>
                    <h1>Top Anime Airing</h1>
                    <CardRoller animeList={topAnimeAiring}/>
                </div>
            </section>
        </div>
    )
}
import { useLoaderData } from 'react-router-dom';
import CardRoller from '../../components/layout/CardRoller/CardRoller';
import MyJumbotron from '../../components/layout/Jumbotron/Jumbotron';
import style from './Home.module.css';
export default function MyHome() {
    const {recentEpisodes, topAnimeAiring} = useLoaderData();
    return (
        <div className={style.home}>
            <section>
                <MyJumbotron animeList={topAnimeAiring}/>
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
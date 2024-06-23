import style from './Watch.module.css';
import { useLoaderData, Outlet, useNavigation, useNavigate, useLocation } from 'react-router-dom';
import MyLoader from '../../components/common/Loader/Loader';
import { useEffect, useState } from 'react';
import MyCapsule from '../../components/ui/Capsule/Capsule';

export default function Watch() {
    const { animeInfo } = useLoaderData();
    const [currentEp, setEp] = useState();
    const navigation = useNavigation();
    const navigate = useNavigate();
    const location = useLocation();

    const hasEpisodeId = (idToFind) => {
        return animeInfo.episodes.some(episode => episode.id === idToFind);
    };

    useEffect(()=>{
        if (currentEp) {
            navigate(currentEp);
            return;
        }
        
        if (location.pathname.split('/').length == 3 
            || location.pathname.split('/')[3] == "" 
            || !hasEpisodeId(location.pathname.split('/')[3])) {

            setEp(animeInfo.episodes[0].id);
        } else {
            const currentEp = location.pathname.split('/')[3];
            setEp(currentEp);
        }

    }, [currentEp]);


    const [episodeRange, setEpisodeRange] = useState([0, 50]);

    const generateOptions = (episodes) => {
        const options = [];
        const totalEpisodes = episodes.length;
        for (let i = 0; i < totalEpisodes; i += 50) {
            const start = i + 1;
            const end = Math.min(i + 50, totalEpisodes);
            options.push({ start, end });
        }
        return options;
    };

    const handleRangeChange = (event) => {
        const [start, end] = event.target.value.split('-').map(Number);
        setEpisodeRange([start - 1, end]);
    };

    const episodeOptions = generateOptions(animeInfo.episodes);
    const limitedEpisodes = animeInfo.episodes.slice(episodeRange[0], episodeRange[1]);

    return (
        <div className={style.container}>
            {navigation.state === "loading" ? <MyLoader /> : window.scroll(0, 0)}
            <div className={style.stream}>
                <div className={style.episodeList}>
                    <div>
                        <h3>Episode List</h3>

                        <select id="episodeRange" onChange={handleRangeChange} className={style.customSelect}>
                        {episodeOptions.map((option, index) => (
                            <option key={index} value={`${option.start}-${option.end}`}>
                                {option.start} - {option.end}
                            </option>
                        ))}
                    </select>

                    </div>
                   
                    {limitedEpisodes.map(episode => (
                        <li key={episode.id} 
                            className={currentEp === episode.id ? style.active : undefined} 
                            onClick={() => setEp(episode.id)}>
                            {episode.number}
                        </li>
                    ))}
                </div>
                <div className={style.videoContainer}>
                    <Outlet />
                </div>
            </div>
           
            <div className={style.animeDetailsContainer}>
                <img src={animeInfo.image} alt="" />
                <div className={style.details}>
                    <h2>{animeInfo.title}</h2>
                    <h5><i>{animeInfo.otherName ?? ""}</i></h5>
                    <div className={style.capsulesContainer}>
                        <MyCapsule isFilled={false} text={animeInfo.subOrDub}/>
                        {animeInfo.type && <MyCapsule isFilled={false} text={animeInfo.type}/>}
                    </div>
                    <h5>{animeInfo.description ?? "No Description.."}</h5>
                    <h5>Status: <span className={animeInfo.status == 'Ongoing' ? style.ongoing : undefined}>{animeInfo.status}</span></h5>
                    <h5>Release Date: {animeInfo.releaseDate ?? "Not Stated"}</h5>
                    <h5>Total Episodes: {animeInfo.totalEpisodes}</h5>
                    <h5>Genre: {animeInfo.genres.map(e => e).join(", ")}</h5>
                </div>
                
            </div>
           

        </div>
    )
}

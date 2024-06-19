import { useEffect, useState } from 'react';
import MyButton from '../../common/Button/Button';
import style from './Jumbotron.module.css';
import PlayIcon from '@mui/icons-material/PlayArrow';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function MyJumbotron() {
    const theme = useTheme();
    const mdBreakPoint = useMediaQuery(theme.breakpoints.up('md'));
    const smBreakPoint = useMediaQuery(theme.breakpoints.up('sm'));

    const [currentSlide, setSlide] = useState(0);
    
    const nextSlide = () => {
        setSlide(currentSlide === url.length - 1? 0 : currentSlide + 1);
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
        paddingTop: "100px",
    }

    return (
        <div className={`${style.container}`} style={{
            backgroundImage: `url(${url[currentSlide].image})`,
            ...!smBreakPoint && smContainerStyle
        }}>

            <div className={style.details} style={!smBreakPoint ? smDetailsStyle : undefined}>
                <h1>{url[currentSlide].title}</h1>
                { mdBreakPoint && <h5>{url[currentSlide].sypnosis}</h5>}
                { !smBreakPoint && <h5>{url[currentSlide].sypnosis}</h5>}
                <br />
                <MyButton isPrimary={true} icon={(<PlayIcon />)} text='Watch' onClick={()=>{}} />
            </div>

            { smBreakPoint && <div className={style.image} style={{backgroundImage: `url(${url[currentSlide].image})`}}></div>}

        </div>
    )
}


let url = [
    {
        title: 'KonoSuba: God\'s Blessing on This Wonderful World! 3',
        sypnosis: 'Kazuma Satou, former NEET and current reincarnated adventurer, finally returns home after the incident at the Crimson Demon village. He is joined by his ever-reliable companions: self-absorbed goddess Aqua, one-trick pony arch-wizard Megumin, and masochistic crusader Lalatina Ford "Darkness" Dustiness. Following their recent exploits, the party is one step closer to vanquishing the Demon King and his armies—a terrifying task that Kazuma is eager to ignore for as long as possible. Things, however, are not going as smoothly as the group would like; they are constantly racking up debt, getting sidetracked during missions, and falling into traps due to their recklessness and eccentricities. As the party struggles with their perennial issues, they receive an invitation from a princess interested in hearing tales of the group\'s "heroic" deeds. Darkness\' pleas to refuse the invitation only fire the others up to accept it, marking the start of yet another uncanny adventure with unforeseen consequences.',
        image: 'https://m.media-amazon.com/images/M/MV5BNmQ1Y2FiMjYtZDAwNy00MzM1LThiOWMtZGE2ZWJlZTBlMGI2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg'
    },
    {
        title: 'Re:Creators',
        sypnosis: 'Humans have designed countless worlds—each one born from the unique imagination of its creator. Souta Mizushino is a high school student who aspires to be such a creator by writing and illustrating his own light novel. One day, while watching anime for inspiration, he is briefly transported into a fierce fight scene. When he returns to the real world, he realizes something is amiss: the anime\'s headstrong heroine, Selesia Yupitilia, has somehow returned with him. Before long, other fictional characters appear in the world, carrying the hopes and scars of their home. A princely knight, a magical girl, a ruthless brawler, and many others now crowd the streets of Japan. However, the most mysterious one is a woman in full military regalia, dubbed "Gunpuku no Himegimi," who knows far more than she should about the creators\' world. Despite this, no one knows her true name or the world she is from. Meanwhile, Souta and Selesia work together with Meteora Österreich, a calm and composed librarian NPC, to uncover the meaning behind these unnatural events. With powerful forces at play, the once clear line between reality and imagination continues to blur, leading to a fateful meeting between creators and those they created.',
        image: 'https://upload.wikimedia.org/wikipedia/en/2/2f/ReCreators_Main_Visual.jpeg'
    },
    {
        title: 'Beyond the Boundary',
        sypnosis: 'Mirai Kuriyama is the sole survivor of a clan of Spirit World warriors with the power to employ their blood as weapons. As such, Mirai is tasked with hunting down and killing "youmu"—creatures said to be the manifestation of negative human emotions. One day, while deep in thought on the school roof, Mirai comes across Akihito Kanbara, a rare half-breed of youmu in human form. In a panicked state, she plunges her blood saber into him only to realize that he\'s an immortal being. From then on, the two form an impromptu friendship that revolves around Mirai constantly trying to kill Akihito, in an effort to boost her own wavering confidence as a Spirit World warrior. Eventually, Akihito also manages to convince her to join the Literary Club, which houses two other powerful Spirit World warriors, Hiroomi and Mitsuki Nase. As the group\'s bond strengthens, however, so does the tenacity of the youmu around them. Their misadventures will soon turn into a fight for survival as the inevitable release of the most powerful youmu, Beyond the Boundary, approaches.',
        image: 'https://imgs.search.brave.com/t6wInYTCdyhQzYCvIRK70LSpiR98oAGAO6uK6ChLDf4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1tWTNaRGRp/TnpndE1EYzVOUzAw/WVRVeUxUZ3lZVGN0/TlRoaVlUaGlNelJs/TkdGaVhrRXlYa0Zx/Y0dkZVFYVnlNelV3/Tnpnek56Z0AuanBn'
    }
];
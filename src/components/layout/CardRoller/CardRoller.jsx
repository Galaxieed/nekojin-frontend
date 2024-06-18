import style from './CardRoller.module.css';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from '@mui/icons-material/ArrowRight';
import { useRef } from 'react';

export default function CardRoller() {
    var carouselRef  = useRef(null);

    const scrollLeft = () => {
        carouselRef.current.scrollBy({
            left: -246,  
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        carouselRef.current.scrollBy({
            left: 246,  
            behavior: 'smooth',
        });
    };

    return (
        // This is Horizontal Scrolling
        <div className={style.container}>
            <button className={style.leftArrow} onClick={scrollLeft}><ArrowLeft /></button>
            <div className={style.carousel} ref={carouselRef}>
                {url.map((e, index) => 
                    <div key={index} className={style.card}>
                        <img src={e} alt="" />
                        <h4>Kyoukai no Kanata</h4>
                    </div>
                )}
            </div>
            <button className={style.rightArrow} onClick={scrollRight}><ArrowRight /></button>
        </div>
    )
}

let url = [
    'https://imgs.search.brave.com/wbkbnrTVUYHjCLH7IILUFRiI7IUALaDm6Ljs32Bm5JA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1URTNOalJt/WTJNdE1tSXlNaTAw/WWpVekxUaGlaR0V0/TldaaVpETTJORFZq/TkRnM1hrRXlYa0Zx/Y0dkZVFYVnlNemd4/T0RNNE5qTUAuanBn',
    'https://m.media-amazon.com/images/M/MV5BNmQ1Y2FiMjYtZDAwNy00MzM1LThiOWMtZGE2ZWJlZTBlMGI2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
    'https://upload.wikimedia.org/wikipedia/en/2/2f/ReCreators_Main_Visual.jpeg',
    'https://imgs.search.brave.com/wbkbnrTVUYHjCLH7IILUFRiI7IUALaDm6Ljs32Bm5JA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1URTNOalJt/WTJNdE1tSXlNaTAw/WWpVekxUaGlaR0V0/TldaaVpETTJORFZq/TkRnM1hrRXlYa0Zx/Y0dkZVFYVnlNemd4/T0RNNE5qTUAuanBn',
    'https://m.media-amazon.com/images/M/MV5BNmQ1Y2FiMjYtZDAwNy00MzM1LThiOWMtZGE2ZWJlZTBlMGI2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
    'https://upload.wikimedia.org/wikipedia/en/2/2f/ReCreators_Main_Visual.jpeg',
    'https://imgs.search.brave.com/wbkbnrTVUYHjCLH7IILUFRiI7IUALaDm6Ljs32Bm5JA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1URTNOalJt/WTJNdE1tSXlNaTAw/WWpVekxUaGlaR0V0/TldaaVpETTJORFZq/TkRnM1hrRXlYa0Zx/Y0dkZVFYVnlNemd4/T0RNNE5qTUAuanBn',
    'https://m.media-amazon.com/images/M/MV5BNmQ1Y2FiMjYtZDAwNy00MzM1LThiOWMtZGE2ZWJlZTBlMGI2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
    'https://upload.wikimedia.org/wikipedia/en/2/2f/ReCreators_Main_Visual.jpeg',
    'https://imgs.search.brave.com/wbkbnrTVUYHjCLH7IILUFRiI7IUALaDm6Ljs32Bm5JA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1URTNOalJt/WTJNdE1tSXlNaTAw/WWpVekxUaGlaR0V0/TldaaVpETTJORFZq/TkRnM1hrRXlYa0Zx/Y0dkZVFYVnlNemd4/T0RNNE5qTUAuanBn',
    'https://m.media-amazon.com/images/M/MV5BNmQ1Y2FiMjYtZDAwNy00MzM1LThiOWMtZGE2ZWJlZTBlMGI2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
    'https://upload.wikimedia.org/wikipedia/en/2/2f/ReCreators_Main_Visual.jpeg',
    'https://imgs.search.brave.com/wbkbnrTVUYHjCLH7IILUFRiI7IUALaDm6Ljs32Bm5JA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1URTNOalJt/WTJNdE1tSXlNaTAw/WWpVekxUaGlaR0V0/TldaaVpETTJORFZq/TkRnM1hrRXlYa0Zx/Y0dkZVFYVnlNemd4/T0RNNE5qTUAuanBn',
    'https://m.media-amazon.com/images/M/MV5BNmQ1Y2FiMjYtZDAwNy00MzM1LThiOWMtZGE2ZWJlZTBlMGI2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
    'https://upload.wikimedia.org/wikipedia/en/2/2f/ReCreators_Main_Visual.jpeg',
    'https://imgs.search.brave.com/wbkbnrTVUYHjCLH7IILUFRiI7IUALaDm6Ljs32Bm5JA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1URTNOalJt/WTJNdE1tSXlNaTAw/WWpVekxUaGlaR0V0/TldaaVpETTJORFZq/TkRnM1hrRXlYa0Zx/Y0dkZVFYVnlNemd4/T0RNNE5qTUAuanBn',
    'https://m.media-amazon.com/images/M/MV5BNmQ1Y2FiMjYtZDAwNy00MzM1LThiOWMtZGE2ZWJlZTBlMGI2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
    'https://upload.wikimedia.org/wikipedia/en/2/2f/ReCreators_Main_Visual.jpeg',
    'https://imgs.search.brave.com/wbkbnrTVUYHjCLH7IILUFRiI7IUALaDm6Ljs32Bm5JA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1URTNOalJt/WTJNdE1tSXlNaTAw/WWpVekxUaGlaR0V0/TldaaVpETTJORFZq/TkRnM1hrRXlYa0Zx/Y0dkZVFYVnlNemd4/T0RNNE5qTUAuanBn',
]
import style from './Card.module.css';

export default function MyCard() {
    return (
        <div className={style.card}>
            <div className={style.card_body}>
                <h1 className={style.card_title}>Card Title</h1>
                <p className={style.card_text}>Card Text</p>
            </div>
        </div>
    )
}
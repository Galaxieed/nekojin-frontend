import style from './Loader.module.css';

export default function MyLoader() {
    return (
        <div className={style.loader}>
            <div className={style.loader__item}></div>
        </div>
    )
}
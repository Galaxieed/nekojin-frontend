import style from './Search.module.css';

export default function Search() {
    return (
        <div className={style.search}>
            <input type="text" className={style.input} placeholder="Search" />
        </div>
    )
}
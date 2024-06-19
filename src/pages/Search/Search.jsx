import style from './Search.module.css';
import SearchIcon from '@mui/icons-material/SearchOutlined'

export default function Search() {
    return (
        <div className={style.container}>
            <div className={style.searchContainer}>
                <input type="text" className={style.input} placeholder="Search..." />
                <button><SearchIcon />Search</button>
            </div>
           
        </div>
    )
}
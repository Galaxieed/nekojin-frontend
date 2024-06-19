import style from './Navbar.module.css';
import BookmarkIcon from '@mui/icons-material/BookmarkBorder'
import SearchIcon from '@mui/icons-material/SearchOutlined'
import MyLogo from '../../ui/Logo/Logo'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
    const navigate = useNavigate();

    return (
        <div className={style.navbar}>
            <div onClick={()=>navigate('/')}>
                <MyLogo />
            </div>
            <nav>
                <ul>
                    <li onClick={()=>navigate('/search')}>
                        <SearchIcon />
                    </li>
                    <li onClick={()=>navigate('/bookmark')}>
                        <BookmarkIcon />
                    </li>
                    
                </ul>
            </nav>
        </div>
    )
}
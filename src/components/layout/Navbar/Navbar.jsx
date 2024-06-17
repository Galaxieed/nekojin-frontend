import style from './Navbar.module.css';
import logo from '../../../assets/Nekojin.jpg';
import UserIcon from '@mui/icons-material/PersonOutline'
import BookmarkIcon from '@mui/icons-material/BookmarkBorder'
import SearchIcon from '@mui/icons-material/SearchOutlined'

export default function NavBar() {
    return (
        <div className={style.navbar}>
            <div>
                <img src={logo} alt="Logo" />
                <h3>Nekojin</h3>
            </div>
            <nav>
                <ul>
                    <li>
                        <SearchIcon />
                    </li>
                    <li>
                        <BookmarkIcon />
                    </li>
                    <li>
                        <UserIcon/>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
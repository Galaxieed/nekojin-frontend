import style from './Navbar.module.css';
import UserIcon from '@mui/icons-material/PersonOutline'
import BookmarkIcon from '@mui/icons-material/BookmarkBorder'
import SearchIcon from '@mui/icons-material/SearchOutlined'
import MyLogo from '../../ui/Logo/Logo'

export default function NavBar() {
    return (
        <div className={style.navbar}>
            <div>
                <MyLogo />
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
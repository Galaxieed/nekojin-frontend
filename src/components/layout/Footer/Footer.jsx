import style from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.copyright}>
                    &copy; {currentYear} Nekojin
                </div>
            </div>
        </div>
    )
}
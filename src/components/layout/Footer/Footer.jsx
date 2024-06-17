import style from './Footer.module.css';

export default function Footer() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.copyright}>
                    &copy; 2021 Nekojin
                </div>
            </div>
        </div>
    )
}
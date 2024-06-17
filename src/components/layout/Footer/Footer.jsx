import style from './Footer.module.css';
import NekojinText from '../../ui/Logo/Text/Nekojin';

export default function Footer() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div style={{display: 'flex', alignItems: "center"}}>
                    <NekojinText /> &nbsp;&nbsp; | &nbsp;&nbsp; <h3>Made with 💖</h3>
                </div>
                <div>
                    <p>This website does not save any files on its server. All contents are sourced from independent third-parties not associated with the site.</p>
                </div>
            </div>
        </div>
    )
}
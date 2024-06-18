import CardRoller from '../../components/layout/CardRoller/CardRoller';
import MyJumbotron from '../../components/layout/Jumbotron/Jumbotron';
import style from './Home.module.css';

export default function MyHome() {
    return (
        <div className={style.home}>
            <section>
                <MyJumbotron />
            </section>

            <section>
                <div>
                    <h1>New Season Exclusives</h1>
                    <CardRoller />
                </div>
            </section>

            <section>
                <div>
                    <h1>All Time Popular</h1>
                    <CardRoller />
                </div>
            </section>
           
        </div>
    )
}
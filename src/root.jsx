import NavBar from "./components/layout/Navbar/Navbar"
import Footer from "./components/layout/Footer/Footer"
import { Outlet, useNavigation } from "react-router-dom"
import { getRecentEpisodes, getTopAnimeAiring } from "./services/apicalls"
import MyLoader from "./components/common/Loader/Loader"
export default function Root() {
    const navigation = useNavigation();
    
    return (
        <>
            <header>
                <NavBar />
            </header>

            <main>
                {navigation.state === "loading" ? <MyLoader /> : window.scroll(0, 0)}
                <Outlet />
            </main>
            
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export async function HomeLoader() {
    const topAnimeAiring = await getTopAnimeAiring();
    const recentEpisodes = await getRecentEpisodes();
    return {
        topAnimeAiring,
        recentEpisodes
    }
}
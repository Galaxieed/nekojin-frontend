import NavBar from "./components/layout/Navbar/Navbar"
import Footer from "./components/layout/Footer/Footer"
import { Outlet } from "react-router-dom"
import { getRecentEpisodes, getTopAnimeAiring } from "./services/apicalls"

export default function Root() {
    
    return (
        <>
            <header>
                <NavBar />
            </header>

            <main>
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
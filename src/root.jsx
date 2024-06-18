import NavBar from "./components/layout/Navbar/Navbar"
import Footer from "./components/layout/Footer/Footer"
import { Outlet } from "react-router-dom"

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
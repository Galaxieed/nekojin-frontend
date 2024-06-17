import NavBar from "./components/layout/Navbar/Navbar"
import Footer from "./components/layout/Footer/Footer"

export default function Root() {
    return (
        <>
            <header>
                <NavBar />
            </header>

            <main>
                <h1>Hello World</h1>
            </main>
            
            <footer>
                <Footer />
            </footer>
        </>
    )
}
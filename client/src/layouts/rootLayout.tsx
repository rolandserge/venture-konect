import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer";
import { useEffect } from "react";
import NavBar from "../components/navBar";

export default function RootLayout() {

    
    const location = useLocation();

     // This effect runs whenever the path name changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div style={{ background: "#f1f1f1"}}>      
            <header style={{ position: "sticky", top: "0", zIndex: "10"}}>
                <NavBar />
            </header>
            <section>
                <Outlet />
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

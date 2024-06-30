import Header from "@/componentes/Header";
import Footer from "@/componentes/Footer";
import { Outlet } from "react-router-dom";

function PaginaBase() {
    return (
        <main>
            <Header />
                <Outlet />
            <Footer />
        </main>
    )
}

export default PaginaBase;
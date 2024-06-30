import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaBase from "./pages/PaginaBase";
import Inicio from "./pages/Inicio";
import VideoNovo from "./pages/VideoNovo";
import './App.css';


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="videonovo" element={<VideoNovo />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )   
}

export default AppRoutes;
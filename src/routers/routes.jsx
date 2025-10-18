import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/Home";


export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/asdad" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}   
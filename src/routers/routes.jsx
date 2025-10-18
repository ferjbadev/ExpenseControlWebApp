import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/Home";


export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}   
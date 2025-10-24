import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { ProtectedRoute } from "../hooks/ProtectedRoute";
import { UserAuth } from "../contexts/AuthContext";


export default function MyRoutes() {
    const {user} = UserAuth();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
                    <Route path="/home" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}   
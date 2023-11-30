import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/forms/Login";
import Register from "./components/forms/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/utils/PrivateRoutes";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route element={<PrivateRoutes />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;

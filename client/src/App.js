import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Main from "pages/Main";

function App() {
	return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:ticker" element={<Main />} />
            </Routes>
        </Router>
    );
}

export default App;

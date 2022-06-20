import './App.css';
import {Route, Routes} from "react-router-dom";
import Navigation from "./shared/components/Navigation/Navigation";
import Home from "./home/Home";
import Liked from "./liked/Liked";

function App() {
    return (
        <div className="app">
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/liked" element={<Liked/>}/>
            </Routes>
        </div>
    )
}

export default App;

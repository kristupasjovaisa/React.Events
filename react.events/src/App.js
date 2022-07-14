import HeaderContainer from "./containers/Header/HeaderContainer";
import FooterContainer from "./containers/Footer/FooterContainer";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import HomePage from "./containers/Pages/HomePage/HomePage";

function App() {
    return (
        <BrowserRouter>
            <div className='mainApp'>
                <HeaderContainer/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                </Routes>
                <FooterContainer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

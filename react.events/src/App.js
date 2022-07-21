import HeaderContainer from "./containers/Header/HeaderContainer";
import FooterContainer from "./containers/Footer/FooterContainer";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import HomePage from "./containers/Pages/HomePage/HomePage";
import Events from "./containers/Pages/EventsPage/Events";
import Favorite from "./containers/Pages/FavoritePage/Favorite";
import About from "./containers/Pages/AboutPage/About";
import Login from "./containers/Pages/LoginPage/Login";
import Register from "./containers/Pages/RegisterPage/Register";
import Users from "./containers/Pages/UsersPage/Users";
import UserAccount from "./containers/Pages/UserAccount/UserAccount";

function App() {
    return (
        <BrowserRouter>
            <div className='mainApp'>
                <HeaderContainer/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/events' element={<Events/>}/>
                    <Route path='/favorite' element={<Favorite/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/users' element={<Users/>}/>
                    <Route path='/account' element={<UserAccount/>}/>
                </Routes>
                <FooterContainer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

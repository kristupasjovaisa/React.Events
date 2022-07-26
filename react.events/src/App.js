import HeaderContainer from "./containers/Header/HeaderContainer";
import FooterContainer from "./containers/Footer/FooterContainer";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import HomePage from "./containers/Pages/HomePage/HomePage";
import EventsViewPage from "./containers/Pages/EventsPage/EventsViewPage";
import AboutPage from "./containers/Pages/AboutPage/AboutPage";
import LoginPage from "./containers/Pages/LoginPage/LoginPage";
import RegisterPage from "./containers/Pages/RegisterPage/RegisterPage";
import UsersPage from "./containers/Pages/UsersPage/UsersPage";
import UserAccountPage from "./containers/Pages/UserAccount/UserAccountPage";
import AddEventPage from "./containers/Pages/AddEventPage/AddEventPage";
import DetailsPage from "./containers/Pages/DetailPage/DetailsPage";

function App() {
    return (
            <BrowserRouter>
                <div className='mainApp'>
                    <HeaderContainer/>
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/events/:id' element={<DetailsPage/>}/>
                        <Route path='/create' element={<AddEventPage/>}/>
                        <Route path='/events' element={<EventsViewPage/>}/>
                        <Route path='/about' element={<AboutPage/>}/>
                        <Route path='/login' element={<LoginPage/>}/>
                        <Route path='/register' element={<RegisterPage/>}/>
                        <Route path='/users' element={<UsersPage/>}/>
                        <Route path='/account' element={<UserAccountPage/>}/>
                    </Routes>
                    <FooterContainer/>
                </div>
            </BrowserRouter>
    );
}

export default App;

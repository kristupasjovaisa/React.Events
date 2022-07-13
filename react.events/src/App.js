import HeaderContainer from "./containers/Header/HeaderContainer";
import ContentContainer from "./containers/Content/ContentContainer";
import FooterContainer from "./containers/Footer/FooterContainer";
import './App.css';

function App() {
    return (
        <>
            <div className='mainApp'>
                <HeaderContainer/>
                <ContentContainer/>
                <FooterContainer/>
            </div>
        </>
    );
}

export default App;

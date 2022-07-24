import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from '../Logo/logo.svg'
import {NavLink, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {logout} from "../../slices/authSlice";
import {useDispatch} from "react-redux";

const HeaderContainer = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {t, i18n} = useTranslation();

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('lng', lng);
    };

    const onClick = () => {
        dispatch(logout())
            .unwrap()
            .then(() => {
                navigate('/login')
            })
    };
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand to="/" as={NavLink}> <img src={logo} className='App-logo'/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-lg-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link to="/events" as={NavLink} className='px-3'> {t('Events')}</Nav.Link>
                        <Nav.Link to="/about" as={NavLink} className='px-3'>{t('About')}</Nav.Link>
                        <NavDropdown title={t('Languages')} className='px-3'>
                            <NavDropdown.Item className='text-bg-light'
                                              onClick={() => handleChangeLng('lt')}>LT</NavDropdown.Item>
                            <NavDropdown.Item className='text-bg-light'
                                              onClick={() => handleChangeLng('en')}>EN</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={t('ADMIN PANEL')}>
                            <Nav.Link to="/users" as={NavLink}>{t('All users')}</Nav.Link>
                        </NavDropdown>
                    </Nav>
                    <Nav style={{maxHeight: '100px'}} navbarScroll>
                        <Nav.Link to="/login" as={NavLink}><i className='fas fa-user'></i>{t('Login')}</Nav.Link>
                        <NavDropdown title={t('Account')} className='px-3'>
                            <NavDropdown.Item className='text-bg-light' to="/account"
                                              as={NavLink}>{t('My Profile')}</NavDropdown.Item>
                            <NavDropdown.Item className='text-bg-light' onClick={onClick}> {t('Logout')} </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default HeaderContainer;
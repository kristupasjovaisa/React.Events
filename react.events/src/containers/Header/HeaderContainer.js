import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {userCircle} from 'react-icons-kit/fa/userCircle'
import logo from '../Logo/logo.svg'
import {NavLink} from "react-router-dom";
import {Icon} from "react-icons-kit";

const HeaderContainer = () =>
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
                    <Nav.Link to="/events" as={NavLink} className='px-3'> Events</Nav.Link>
                    <Nav.Link to="/favorite" as={NavLink} className='px-3'> Favorite</Nav.Link>
                    <Nav.Link to="/about" as={NavLink} className='px-3'> About</Nav.Link>
                    <NavDropdown title="Languages" className='px-3'>
                        <NavDropdown.Item className='text-bg-light' href="#action5">LT</NavDropdown.Item>
                        <NavDropdown.Item className='text-bg-light' href="#action6">EN</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="ADMIN PANEL" >
                        <Nav.Link to="/users" as={NavLink}>All users</Nav.Link>
                    </NavDropdown>
                </Nav>
                <Nav style={{maxHeight: '100px'}} navbarScroll>
                <Nav.Link to="/login" as={NavLink}><i className='fas fa-user'></i> Login</Nav.Link>
                <NavDropdown title="Account" className='px-3'>
                    <NavDropdown.Item className='text-bg-light'to="/account" as={NavLink}>My Profile</NavDropdown.Item>
                    <NavDropdown.Item className='text-bg-light' to="/login" as={NavLink}>Logout</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

export default HeaderContainer;
import { Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from '../logo/logo.svg'

const HeaderContainer = () =>
    <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#"> <img src={logo} className='App-logo'/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="m-lg-auto my-2 my-lg-0"
                    style={{maxHeight: '100px'}}
                    navbarScroll
                >
                    <Nav.Link href="#action2" className='px-3'> Events</Nav.Link>
                    <Nav.Link href="#action3" className='px-3'> Favorite</Nav.Link>
                    <Nav.Link href="#action4" className='px-3'> About</Nav.Link>
                    <NavDropdown title="Languages" className='px-3' id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action5">LT</NavDropdown.Item>
                        <NavDropdown.Item href="#action6">EN</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="ADMIN PANEL"  id="navbarScrollingDropdown">
                        <Nav.Link href="#action3">All users</Nav.Link>
                    </NavDropdown>
                </Nav>
                <Nav.Link href="#" ><i className='fas fa-user'></i> Login</Nav.Link>
            </Navbar.Collapse>
        </Container>
    </Navbar>

export default HeaderContainer;
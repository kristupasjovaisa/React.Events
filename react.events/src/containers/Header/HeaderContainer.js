import {Button, Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";

const HeaderContainer = () =>
    <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#">Events</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{maxHeight: '100px'}}
                    navbarScroll
                >
                    <Nav.Link href="#action2"> All Events</Nav.Link>
                    <Nav.Link href="#action3"> My Events</Nav.Link>
                    <Nav.Link href="#action4"> About</Nav.Link>
                    <NavDropdown title="Languages" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action5">LT</NavDropdown.Item>
                        <NavDropdown.Item href="#action6">EN</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav.Link href="#" disabled>
                    Login
                </Nav.Link>
            </Navbar.Collapse>
        </Container>
    </Navbar>

export default HeaderContainer;
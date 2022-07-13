import {Col, Container, Row} from "react-bootstrap";

const FooterContainer = () => {
    return(
        <footer className='fixed-bottom'>
            <Container>
               <Row>
                   <Col className='text-center py-3'>Copyright &copy; Events</Col>
               </Row>
            </Container>
        </footer>
    )
}

export default FooterContainer;
import {Button, Form} from "react-bootstrap";

const Register = () => {
    return(
        <>
            <Form>
                <Form.Label><h3>Sign Up</h3></Form.Label>
                <Form.Group className="mb-3" >
                    <Form.Label>Nickname</Form.Label>
                    <Form.Control type="text" placeholder="Enter nickname" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter city" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone number" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="outline-success" size='sm'>Submit</Button>
            </Form>
        </>
    )
}

export default Register;
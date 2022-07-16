import React, {useState} from "react";
import {Button, Card, Container, Form, ListGroup, Modal, ModalBody, ModalHeader} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {addEvent} from "../../../redux/Event/EventsSlice";

const Events = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [startEventDateTime, setStartEventDateTime] = useState('');
    const [endEventDateTime, setEndEventDateTime] = useState('');
    const [description, setDescription] = useState('');
    const eventsList = useSelector((state) => state.events.value)
    return (
        <>
            <div className='text-center mt-3'>
                <Modal show={show} onHide={handleClose}>
                    <ModalHeader closeButton>
                        <strong>Created Your Best Event!</strong>
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <Form.Group className='mb-3' controlId='eventName'>
                                <Form.Label>Event name</Form.Label>
                                <Form.Control type='text' placeholder="Enter event name"
                                              onChange={(event) => {
                                                  setName(event.target.value)
                                              }}/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='eventLocation'>
                                <Form.Label>Event location</Form.Label>
                                <Form.Control type='text' placeholder="Enter event location"
                                              onChange={(event) => {
                                                  setLocation(event.target.value)
                                              }}/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='eventCategory'>
                                <Form.Label>Select category</Form.Label>
                                <Form.Select onChange={(event) => {
                                    setCategory(event.target.value)
                                }}>
                                    <option></option>
                                    <option>Sports</option>
                                    <option>Concerts</option>
                                    <option>Festivals</option>
                                    <option>Performing Arts</option>
                                    <option>Conferences</option>
                                    <option>Community</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='eventPrice'>
                                <Form.Label>Event price</Form.Label>
                                <Form.Control type='text' placeholder="Enter event price"
                                              onChange={(event) => {
                                                  setPrice(event.target.value)
                                              }}/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='eventStart'>
                                <Form.Label>Start event date/time</Form.Label>
                                <Form.Control type='text' placeholder="Enter start event date/time"
                                              onChange={(event) => {
                                                  setStartEventDateTime(event.target.value)
                                              }}/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='eventEnd'>
                                <Form.Label>End event date/time</Form.Label>
                                <Form.Control type='text' placeholder="Enter end event date time"
                                              onChange={(event) => {
                                                  setEndEventDateTime(event.target.value)
                                              }}/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='eventDescription'>
                                <Form.Label>Event description</Form.Label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                          onChange={(event) => {
                                              setDescription(event.target.value)
                                          }}></textarea>
                            </Form.Group>
                        </Form>
                    </ModalBody>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button onClick={() => {
                            dispatch(addEvent({
                                id: eventsList[eventsList.length - 1].id + 1,
                                name: name,
                                location: location,
                                category: category,
                                price: price,
                                startEventDateTime: startEventDateTime,
                                endEventDateTime: endEventDateTime,
                                description: description
                            }))
                        }} variant="primary">
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
                <button className='button-30' role='button' onClick={handleShow}>
                    <Card.Title>Add new event</Card.Title>
                </button>
            </div>
            <Container>
                <div className='displayEvents mt-5'>
                    {eventsList.map((e) => {
                            return (
                                <Container>
                                    <Card style={{width: '18rem'}} className='cardDesign'>
                                        <Card.Body>
                                            <Card.Title> Full info about Event</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item><Card.Title>Event:</Card.Title> {e.name}</ListGroup.Item>
                                            <ListGroup.Item><Card.Title>Location:</Card.Title> {e.location}</ListGroup.Item>
                                            <ListGroup.Item><Card.Title>Category:</Card.Title> {e.category}</ListGroup.Item>
                                            <ListGroup.Item><Card.Title>Price: </Card.Title>{e.price} $</ListGroup.Item>
                                            <ListGroup.Item><Card.Title>Start:</Card.Title> {e.startEventDateTime}
                                            </ListGroup.Item>
                                            <ListGroup.Item><Card.Title>End: </Card.Title>{e.endEventDateTime}
                                            </ListGroup.Item>
                                        </ListGroup>
                                        <Card.Body>
                                            <Card.Text>
                                                {e.description}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Body>
                                            <Button variant="outline-warning" size='sm'>Update</Button>{' '}
                                            <Button variant="outline-success" size='sm'>Favorite</Button>{' '}
                                            <Button variant="outline-danger" size='sm'>Delete</Button>{' '}
                                        </Card.Body>
                                    </Card>
                                </Container>
                            )
                        }
                    )}
                </div>
            </Container>
        </>
    );
};

export default Events;
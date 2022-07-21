import {Button, Card,ListGroup} from "react-bootstrap";
import {useSelector} from "react-redux";

const MyEvents = () =>{
    const eventsList = useSelector((state) => state.events.value)
    return (
        <>
            <div className='displayEvents mt-5 '>
                {eventsList.map((e) => {
                        return (
                            <Card style={{width: '18rem'}} className='cardDesign'>
                                <Card.Body>
                                    <Card.Title> Full info about Event</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item><Card.Title>Event:</Card.Title> {e.name}
                                    </ListGroup.Item>
                                    <ListGroup.Item><Card.Title>Location:</Card.Title> {e.location}
                                    </ListGroup.Item>
                                    <ListGroup.Item><Card.Title>Category:</Card.Title> {e.category}
                                    </ListGroup.Item>
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
                                    <Button variant="outline-danger" size='sm'>Delete</Button>{' '}
                                </Card.Body>
                            </Card>
                        )
                    }
                )}
            </div>
        </>
    );
}

export default MyEvents;
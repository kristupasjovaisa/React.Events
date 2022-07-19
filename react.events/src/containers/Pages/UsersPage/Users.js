import {Button, Card, ListGroup} from "react-bootstrap";
import {useSelector} from "react-redux";

const Users = () => {
    const usersList = useSelector((state) => state.users.value)
    return (
        <>
            <div className='mainUser'>
                {usersList.map((user) => {
                        return (
                                <Card className='cardUser'>
                                    <Card.Header as="h5">Full info about user</Card.Header>
                                    <Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item><Card.Title>Nickname:</Card.Title> {user.nickname}
                                            </ListGroup.Item>
                                            <ListGroup.Item><Card.Title>City:</Card.Title> {user.city}
                                            </ListGroup.Item>
                                            <ListGroup.Item><Card.Title>Email:</Card.Title> {user.email}
                                            </ListGroup.Item>
                                            <ListGroup.Item><Card.Title>Phone number:</Card.Title> {user.phoneNumber}
                                            </ListGroup.Item>
                                            <ListGroup.Item><Card.Title>Have event:</Card.Title> {'0'}
                                            </ListGroup.Item>
                                        </ListGroup>
                                        <Button className='button' variant="outline-danger" size='sm'>Delete</Button>{' '}
                                    </Card.Body>
                                </Card>
                        )
                    }
                )}
            </div>
        </>
    );
};

export default Users;
import { Card, ListGroup} from "react-bootstrap";
import EventList from "../../../components/EventList/EventList";

const UserAccount = () => {

    return (
        <>
            <div className='mainUser mt-4'>
                <Card className='cardUser'>
                    <Card.Header as="h5">My Profile</Card.Header>
                    <Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><Card.Title>Nickname:</Card.Title> {'Petras'}
                            </ListGroup.Item>
                            <ListGroup.Item><Card.Title>City:</Card.Title> {'Kaunas'}
                            </ListGroup.Item>
                            <ListGroup.Item><Card.Title>Email:</Card.Title> {'petras@gmail.com'}
                            </ListGroup.Item>
                            <ListGroup.Item><Card.Title>Phone number:</Card.Title> {'8652222325'}
                            </ListGroup.Item>
                            <ListGroup.Item><Card.Title>My Events:</Card.Title> {'8'}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
            <div className='accountLine'></div>
            <EventList/>
        </>
    );

}
export default UserAccount;
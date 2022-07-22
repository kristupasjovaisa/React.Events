import {Button, Card, ListGroup} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const EventList = () => {
    const {t} = useTranslation();
    return (
        <>
            <div className='displayEvents mt-5 '>
                <Card style={{width: '18rem'}} className='cardDesign'>
                    <Card.Body>
                        <Card.Title> {t('Full info about Event')}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item><Card.Title>{t('Event name')}:</Card.Title>
                        </ListGroup.Item>
                        <ListGroup.Item><Card.Title>{t('Location')}:</Card.Title>
                        </ListGroup.Item>
                        <ListGroup.Item><Card.Title>{t('Category')}:</Card.Title>
                        </ListGroup.Item>
                        <ListGroup.Item><Card.Title>{t('Price')}: </Card.Title></ListGroup.Item>
                        <ListGroup.Item><Card.Title>{t('Start')}:</Card.Title>
                        </ListGroup.Item>
                        <ListGroup.Item><Card.Title>{t('End')}: </Card.Title>
                        </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Text></Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Button variant="outline-warning" size='sm'>{t('Update')}</Button>{' '}
                        <Button variant="outline-danger" size='sm'>{t('Delete')}</Button>{' '}
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default EventList;
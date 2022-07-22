import {Button, Card, ListGroup} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchEvents} from '/projects/React.Events/react.events/src/redux/Slices/eventsSlice'

const EventList = () => {
    const {t} = useTranslation();
    const events = useSelector((state) => state.events)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchEvents())
    }, [])

    return (
        <>
            <div className='displayEvents mt-5 '>
                {events.map((e) => {
                        return (
                            <Card style={{width: '18rem'}} className='cardDesign'>
                                <Card.Body>
                                    <Card.Title> {t('Full info about Event')}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item><Card.Title>{t('Event name')}:</Card.Title> {e.name}
                                    </ListGroup.Item>
                                    <ListGroup.Item><Card.Title>{t('Location')}:</Card.Title> {e.location}
                                    </ListGroup.Item>
                                    <ListGroup.Item><Card.Title>{t('Category')}:</Card.Title> {e.category}
                                    </ListGroup.Item>
                                    <ListGroup.Item><Card.Title>{t('Price')}: </Card.Title>{e.price} $</ListGroup.Item>
                                    <ListGroup.Item><Card.Title>{t('Start')}:</Card.Title> {e.startEventDateTime}
                                    </ListGroup.Item>
                                    <ListGroup.Item><Card.Title>{t('End')}: </Card.Title>{e.endEventDateTime}
                                    </ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Text>
                                        {e.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <Button variant="outline-warning" size='sm'>{t('Update')}</Button>{' '}
                                    <Button variant="outline-danger" size='sm'>{t('Delete')}</Button>{' '}
                                </Card.Body>
                            </Card>
                        )
                    }
                )}
            </div>
        </>
    );
}

export default EventList;
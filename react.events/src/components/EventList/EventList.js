import {Card, ListGroup} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchEvents} from '/projects/React.Events/react.events/src/slices/eventsSlice'
import {useNavigate} from "react-router-dom";

const EventList = () => {

    const navigate = useNavigate()
    const routeChange = (button) => {
        navigate(button.target.value);
    }

    const {t} = useTranslation();
    const eventsState = useSelector((state) => state.eventsState)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchEvents())
    }, [])

    return (
        <div className='displayEvents mt-5 '>
            {(() => {
                if (eventsState.isLoading) {
                    return (
                        <span>Loading...</span>
                    )
                } else if (eventsState.error) {
                    return (
                        <span>Error: {eventsState.error}</span>
                    )
                } else {
                    return (
                        eventsState.events.map((e) => {
                                return (
                                    <Card style={{width: '18rem'}} className='cardDesign'>
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
                                            <button className='button-30-3' value={e.eventId} onClick={routeChange}>{t('Details')}</button>
                                        </Card.Body>
                                    </Card>
                                )
                            }
                        )
                    )
                }
            })()}
        </div>
    )
}

export default EventList;
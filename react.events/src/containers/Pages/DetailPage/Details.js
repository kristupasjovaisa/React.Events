import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {getEvent} from "../../../slices/eventSlice";
import {Card, ListGroup} from "react-bootstrap";
import {useEffect} from "react";

const Details = () => {

    const params = useParams();
    const {t} = useTranslation();
    const eventState = useSelector((state) => state.eventState)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getEvent(params.id))
    }, [params])

    return (
        <div className='displayEvents mt-3 '>
            {(() => {
                if (eventState.isLoading) {
                    return (
                        <span>Loading...</span>
                    )
                } else if (eventState.error) {
                    return <span>{eventState.error}</span>
                } else if (eventState.event) {
                    return (
                        <Card style={{width: '18rem'}} className='cardDesign'>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item><Card.Title>{t('Event name')}:</Card.Title> {eventState.event.name}
                                </ListGroup.Item>
                                <ListGroup.Item><Card.Title>{t('Location')}:</Card.Title> {eventState.event.location}
                                </ListGroup.Item>
                                <ListGroup.Item><Card.Title>{t('Category')}:</Card.Title> {eventState.event.category}
                                </ListGroup.Item>
                                <ListGroup.Item><Card.Title>{t('Price')}: </Card.Title>{eventState.event.price} $</ListGroup.Item>
                                <ListGroup.Item><Card.Title>{t('Start')}:</Card.Title> {eventState.event.startEventDateTime}
                                </ListGroup.Item>
                                <ListGroup.Item><Card.Title>{t('End')}: </Card.Title>{eventState.event.endEventDateTime}
                                </ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Text>
                                    {eventState.event.description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <button className='button-30-3'>{t('Update')}</button>
                                <div className='line'></div>
                                <button className='button-30-4'
                                >{t('Delete')}</button>
                            </Card.Body>
                        </Card>
                    )
                } else {
                    return null;
                }
            })()}
        </div>
    )
}

export default Details;
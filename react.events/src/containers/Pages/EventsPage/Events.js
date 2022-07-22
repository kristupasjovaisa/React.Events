import React, {useState} from "react";
import {Button, Card, Form, ListGroup, Modal, ModalBody, ModalHeader} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";

const Events = () => {
    const store = require('/projects/React.Events/react.events/src/redux/store')
    const eventAction = require('/projects/React.Events/react.events/src/redux/Slices/eventsSlice')
    const {t}=useTranslation();
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
                        <strong>{t('Create Your Best Event!')}</strong>
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder={t('Event name')}
                                              onChange={(event) => {
                                                  setName(event.target.value)
                                              }}/>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder={t('Event location')}
                                              onChange={(event) => {
                                                  setLocation(event.target.value)
                                              }}/>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Select onChange={(event) => {
                                    setCategory(event.target.value)
                                }}>
                                    <option>{t('Select category')}</option>
                                    <option>{t('Sports')}</option>
                                    <option>{t('Concerts')}</option>
                                    <option>{t('Festivals')}</option>
                                    <option>{t('Performing Arts')}</option>
                                    <option>{t('Conferences')}</option>
                                    <option>{t('Community')}</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder={t('Event price')}
                                              onChange={(event) => {
                                                  setPrice(event.target.value)
                                              }}/>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder={t('Start event date/time')}
                                              onChange={(event) => {
                                                  setStartEventDateTime(event.target.value)
                                              }}/>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder={t('End event date time')}
                                              onChange={(event) => {
                                                  setEndEventDateTime(event.target.value)
                                              }}/>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <textarea className="form-control" rows="3" placeholder={t('Description')}
                                          onChange={(event) => {
                                              setDescription(event.target.value)
                                          }}></textarea>
                            </Form.Group>
                        </Form>
                    </ModalBody>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={handleClose}>
                            {t('Close')}
                        </Button>
                        {/*<Button onClick={() => {*/}
                        {/*    dispatch(addEvent({*/}
                        {/*        id: eventsList[eventsList.length - 1].id + 1,*/}
                        {/*        name: name,*/}
                        {/*        location: location,*/}
                        {/*        category: category,*/}
                        {/*        price: price,*/}
                        {/*        startEventDateTime: startEventDateTime,*/}
                        {/*        endEventDateTime: endEventDateTime,*/}
                        {/*        description: description*/}
                        {/*    }))*/}
                        {/*}} variant="outline-primary">*/}
                            {t('Save')}
                        {/*</Button>*/}
                    </Modal.Footer>
                </Modal>
                <button className='button-30' role='button' onClick={handleShow}>
                    <Card.Title>{t('Add new event')}</Card.Title>
                </button>
            </div>
            <div className='displayEvents mt-5 '>
                {eventsList.map((e) => {
                        return (
                            <Card style={{width: '18rem'}} className='cardDesign'>
                                <Card.Body>
                                    <Card.Title>{t('Full info about Event')}</Card.Title>
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
                                    <Button variant="outline-success" size='sm'>Favorite</Button>{' '}
                                    <Button variant="outline-danger" size='sm'>{t('Delete')}</Button>{' '}
                                </Card.Body>
                            </Card>
                        )
                    }
                )}
            </div>
        </>
    );
};

export default Events;
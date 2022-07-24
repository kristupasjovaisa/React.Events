import React, {useState} from "react";
import {Button, Card, Form, Modal, ModalBody, ModalHeader} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import EventList from "../../../components/EventList/EventList";

const EventsView = () => {
    const store = require('/projects/React.Events/react.events/src/redux/store')
    const eventAction = require('/projects/React.Events/react.events/src/redux/Slices/eventsSlice')
    const {t} = useTranslation();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                                <Form.Control type='text' placeholder={t('Event name')}/>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder={t('Event location')}/>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Select>
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
                                <Form.Control type='text' placeholder={t('Event price')}/>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder={t('Start event date/time')}/>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder={t('End event date time')}/>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <textarea className="form-control" rows="3" placeholder={t('Description')}></textarea>
                            </Form.Group>
                        </Form>
                    </ModalBody>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={handleClose}>
                            {t('Close')}
                        </Button>
                        <Button variant="outline-primary">
                        {t('Save')}
                        </Button>
                    </Modal.Footer>
                </Modal>
                <button className='button-30' role='button' onClick={handleShow}>
                    <Card.Title>{t('Add new event')}</Card.Title>
                </button>
            </div>
            <EventList/>
        </>
    );
};

export default EventsView;
import React, {useState} from "react";
import {Button, Card, Form, Modal, ModalBody, ModalHeader} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import EventList from "../../../components/EventList/EventList";
import AddEvent from "../../../components/AddEvent/addEvent";

const EventsView = () => {


    const {t} = useTranslation();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='text-center mt-3'>
                <Modal show={show} onHide={handleClose}>
                    <AddEvent/>
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
import React, {useState} from "react";
import {Button, Modal, ModalBody, ModalHeader} from "react-bootstrap";
import AddEventPage from "../AddEventPage/AddEventPage";

const Events = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='text-center mt-3'>
            <Modal show={show} onHide={handleClose}>
                <ModalHeader closeButton>
                    <strong>Created Your Best Event!</strong>
                </ModalHeader>
                <ModalBody>
                    <AddEventPage/>
                </ModalBody>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
            <button className='button-30' role='button' onClick={handleShow}>
                Add new event
            </button>
        </div>
    );
};

export default Events;
import {Button, Form, Modal, ModalBody, ModalHeader} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const AddEvent = () => {

    const {t} = useTranslation();

    return (
        <>
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
                <Button variant="outline-secondary">
                    {t('Close')}
                </Button>
                <Button variant="outline-primary">
                    {t('Save')}
                </Button>
            </Modal.Footer>
        </>
    )
};

export default AddEvent;
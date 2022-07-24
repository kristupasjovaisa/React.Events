import {Button, Form, Modal, ModalBody, ModalHeader} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {addEvent} from "../../slices/eventSlice";
import {useState} from "react";

const AddEvent = () => {

    const [showModal, setShowModal] = useState(true);

    const {t} = useTranslation();
    const dispatch = useDispatch();

    const addEventState = useSelector((state) => state.addEventState)

    const schema = yup.object().shape({
        name: yup.string().required(),
        location: yup.string().required(),
        category: yup.string().required(),
        price: yup.string().required(),
        startEventDateTime: yup.string().required(),
        endEventDateTime: yup.string().required(),
        description: yup.string().required(),
    });

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        mode: 'onTouched',
    });

    const onSubmit = (formValue) => {
        console.log("ADDD",formValue)
        const {name, location, category, price, startEventDateTime, endEventDateTime, description} = formValue;

        dispatch(addEvent({name, location, category, price, startEventDateTime, endEventDateTime, description}))
            .unwrap()
            .then(() => {
                // navigate('/')
            })
    };
    if (addEventState.isLoading) {
        return <span>Loading...</span>
    } else {
        return (
            <>
                <ModalHeader closeButton>
                    <strong>{t('Create Your Best Event!')}</strong>
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className='mb-3'>
                            <Form.Control type='text'
                                          placeholder={t('Event name')} {...register('name')}/>
                            {errors.name?.type === 'required' &&
                                <p className='text-bg-light'> {t('Event name is required')}</p>}
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Control type='text'
                                          placeholder={t('Event location')} {...register('location')}/>
                            {errors.location?.type === 'required' &&
                                <p className='text-bg-light'> {t('Event location is required')}</p>}
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
                            <Form.Control type='text'
                                          placeholder={t('Event price')} {...register('price')} />
                            {errors.price?.type === 'required' &&
                                <p className='text-bg-light'> {t('Event price is required')}</p>}
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Control type='text'
                                          placeholder={t('Start event date/time')} {...register('startEventDateTime')}/>
                            {errors.startEventDateTime?.type === 'required' &&
                                <p className='text-bg-light'> {t('Event start date/time is required')}</p>}
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Control type='text'
                                          placeholder={t('End event date time')} {...register('endEventDateTime')}/>
                            {errors.endEventDateTime?.type === 'required' &&
                                <p className='text-bg-light'> {t('Event end date/time is required')}</p>}
                        </Form.Group>
                        <Form.Group className='mb-3'>
                        <textarea className="form-control"
                                  rows="3"
                                  placeholder={t('Description')} {...register('description')}></textarea>
                            {errors.description?.type === 'required' &&
                                <p className='text-bg-light'> {t('Event description is required')}</p>}
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
    }
};

export default AddEvent;
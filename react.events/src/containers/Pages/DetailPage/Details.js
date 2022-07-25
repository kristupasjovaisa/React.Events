import {useNavigate, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {getEvent, updateEvent} from "../../../slices/eventSlice";
import {Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";


const Details = () => {

    const params = useParams();
    const {t} = useTranslation();
    const eventState = useSelector((state) => state.eventState)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getEvent(params.id))
    }, [params])

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        category: '',
        price: '',
        startEventDateTime: '',
        endEventDateTime: '',
        description: ''
    })
    const {name, location, category, price, startEventDateTime, endEventDateTime, description} = formData

    const schema = yup.object().shape({
        name: yup.string().required(),
        location: yup.string().required(),
        category: yup.string().required(),
        price: yup.string().required(),
        startEventDateTime: yup.string().required(),
        endEventDateTime: yup.string().required(),
        description: yup.string().required(),
    });

    const {register, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        mode: 'onTouched',
    });

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = () => {
        dispatch(updateEvent({name, location, category, price, startEventDateTime, endEventDateTime, description}))
            .unwrap()
            .then(() => {
                navigate('/events')
            })
    };

    return (
        <div className='registerForm mt-5 '>
            {(() => {
                if (eventState.isLoading) {
                    return (
                        <span>Loading...</span>
                    )
                } else if (eventState.error) {
                    return <span>{eventState.error}</span>
                } else if (eventState.event) {
                    return (
                        <Form>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text'
                                              placeholder={t('Event name')} {...register('name')}
                                              value={eventState.event.name}
                                              onChange={onChange}
                                />
                                {errors.name?.type === 'required' &&
                                    <p className='text-bg-light'> {t('Event name is required')}</p>}
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text'
                                              placeholder={t('Event location')} {...register('location')}
                                              value={eventState.event.location}
                                              onChange={onChange}
                                />
                                {errors.location?.type === 'required' &&
                                    <p className='text-bg-light'> {t('Event location is required')}</p>}
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Select onChange={onChange} value={eventState.event.category}>
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
                                              placeholder={t('Event price')} {...register('price')}
                                             value={eventState.event.price}
                                              onChange={onChange}
                                />
                                {errors.price?.type === 'required' &&
                                    <p className='text-bg-light'> {t('Event price is required')}</p>}
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text'
                                              placeholder={t('Start event date/time')} {...register('startEventDateTime')}
                                              value={eventState.event.startEventDateTime}
                                              onChange={onChange}
                                />
                                {errors.startEventDateTime?.type === 'required' &&
                                    <p className='text-bg-light'> {t('Event start date/time is required')}</p>}
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text'
                                              placeholder={t('End event date time')} {...register('endEventDateTime')}
                                              value={eventState.event.endEventDateTime}
                                              onChange={onChange}
                                />
                                {errors.endEventDateTime?.type === 'required' &&
                                    <p className='text-bg-light'> {t('Event end date/time is required')}</p>}
                            </Form.Group>
                            <Form.Group className='mb-3'>
                        <textarea className="form-control"
                                  rows="3"
                                  placeholder={t('Description')} {...register('description')}
                                  value={eventState.event.description}
                                  onChange={onChange}></textarea>
                                {errors.description?.type === 'required' &&
                                    <p className='text-bg-light'> {t('Event description is required')}</p>}
                            </Form.Group>
                            <button className='button-30-1' onClick={onSubmit}>
                                {t('Save')}
                            </button>
                            <div className='line'></div>
                            <button className='button-30-5' onClick={onSubmit}>
                                {t('Delete')}
                            </button>
                        </Form>
                        // <Card style={{width: '18rem'}} className='cardDesign'>
                        //     <ListGroup className="list-group-flush">
                        //         <ListGroup.Item><Card.Title>{t('Event name')}:</Card.Title> {eventState.event.name}
                        //         </ListGroup.Item>
                        //         <ListGroup.Item><Card.Title>{t('Location')}:</Card.Title> {eventState.event.location}
                        //         </ListGroup.Item>
                        //         <ListGroup.Item><Card.Title>{t('Category')}:</Card.Title> {eventState.event.category}
                        //         </ListGroup.Item>
                        //         <ListGroup.Item><Card.Title>{t('Price')}: </Card.Title>{eventState.event.price} $</ListGroup.Item>
                        //         <ListGroup.Item><Card.Title>{t('Start')}:</Card.Title> {eventState.event.startEventDateTime}
                        //         </ListGroup.Item>
                        //         <ListGroup.Item><Card.Title>{t('End')}: </Card.Title>{eventState.event.endEventDateTime}
                        //         </ListGroup.Item>
                        //     </ListGroup>
                        //     <Card.Body>
                        //         <Card.Text>
                        //             {eventState.event.description}
                        //         </Card.Text>
                        //     </Card.Body>
                        //     <Card.Body>
                        //         <button className='button-30-3'>{t('Update')}</button>
                        //         <div className='line'></div>
                        //         <button className='button-30-4'
                        //         >{t('Delete')}</button>
                        //     </Card.Body>
                        // </Card>
                    )
                } else {
                    return null;
                }
            })()}
        </div>
    )
}

export default Details;
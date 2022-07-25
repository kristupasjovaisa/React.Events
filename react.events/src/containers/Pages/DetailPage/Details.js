import {useNavigate, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {deleteEvent, getEvent, updateEvent} from "../../../slices/eventSlice";
import {Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {isAdmin} from "../../../helper/roles";


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
        name: null,
        location: null,
        category: null,
        price: null,
        startEventDateTime: null,
        endEventDateTime: null,
        description: null
    })

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

    const onSave = () => {
        const eventId = params.id
        const name = formData.name || eventState.event.name
        const location = formData.location || eventState.event.location
        const category = formData.category || eventState.event.category
        const price = formData.price || eventState.event.price
        const startEventDateTime = formData.startEventDateTime || eventState.event.startEventDateTime
        const endEventDateTime = formData.endEventDateTime || eventState.event.endEventDateTime
        const description = formData.description || eventState.event.description
        dispatch(updateEvent({
                eventId,
                name,
                location,
                category,
                price,
                startEventDateTime,
                endEventDateTime,
                description
            }
        ))
    };

    const onDelete = () => {
        dispatch(deleteEvent(params.id))
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
                } else if (eventState.shouldNavigateToEvents) {
                    navigate('/events')
                    return null;
                } else if (eventState.event) {
                    return (
                        <Form>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text'
                                              placeholder={t('Event name')} {...register('name')}
                                              defaultValue={eventState.event.name}
                                              disabled={!isAdmin()}
                                              onChange={onChange}
                                />
                                {errors.name?.type === 'required' &&
                                    <p className='text-bg-light'> {t('Event name is required')}</p>}
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text'
                                              placeholder={t('Event location')} {...register('location')}
                                              defaultValue={eventState.event.location}
                                              disabled={!isAdmin()}
                                              onChange={onChange}
                                />
                                {errors.location?.type === 'required' &&
                                    <p className='text-bg-light'> {t('Event location is required')}</p>}
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Select onChange={onChange} defaultValue={eventState.event.category} disabled={!isAdmin()}>
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
                                              defaultValue={eventState.event.price}
                                              onChange={onChange}
                                              disabled={!isAdmin()}
                                />
                                {errors.price?.type === 'required' &&
                                    <p className='text-bg-light'> {t('Event price is required')}</p>}
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text'
                                              placeholder={t('Start event date/time')} {...register('startEventDateTime')}
                                              defaultValue={eventState.event.startEventDateTime}
                                              onChange={onChange}
                                              disabled={!isAdmin()}
                                />
                                {errors.startEventDateTime?.type === 'required' &&
                                    <p className='text-bg-light'> {t('Event start date/time is required')}</p>}
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text'
                                              placeholder={t('End event date time')} {...register('endEventDateTime')}
                                              defaultValue={eventState.event.endEventDateTime}
                                              onChange={onChange}
                                              disabled={!isAdmin()}
                                />
                                {errors.endEventDateTime?.type === 'required' &&
                                    <p className='text-bg-light'> {t('Event end date/time is required')}</p>}
                            </Form.Group>
                            <Form.Group className='mb-3'>
                        <textarea className="form-control"
                                  rows="3"
                                  placeholder={t('Description')} {...register('description')}
                                  defaultValue={eventState.event.description}
                                  onChange={onChange}
                                  disabled={!isAdmin()}
                        ></textarea>
                                {errors.description?.type === 'required' &&
                                    <p className='text-bg-light'> {t('Event description is required')}</p>}
                            </Form.Group>
                            <button className='button-30-1' onClick={onSave} hidden={!isAdmin()}>
                                {t('Save')}
                            </button>
                            <div className='line' hidden={!isAdmin()}></div>
                            <button className='button-30-5' onClick={onDelete} hidden={!isAdmin()}>
                                {t('Delete')}
                            </button>
                        </Form>
                    )
                } else {
                    return null;
                }
            })()}
        </div>
    )
}

export default Details;
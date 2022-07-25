import { Form} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {addEvent} from "../../slices/addEventSlice";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const AddEvent = () => {

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
        dispatch(addEvent({name, location, category, price, startEventDateTime, endEventDateTime, description}))
            .unwrap()
            .then(() => {
                navigate('/events')
            })
    };

    if (addEventState.isLoading) {
        return <span>Loading...</span>
    } else if (addEventState.isAdded) {
        return null;
    } else {
        return (
            <>
                <Form className='registerForm'>
                    <Form.Label><strong>{t('Create Your Best Event!')}</strong></Form.Label>
                    <Form.Group className='mb-3'>
                        <Form.Control type='text'
                                      placeholder={t('Event name')} {...register('name')}
                                      onChange={onChange}
                        />
                        {errors.name?.type === 'required' &&
                            <p className='text-bg-light'> {t('Event name is required')}</p>}
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Control type='text'
                                      placeholder={t('Event location')} {...register('location')}
                                      onChange={onChange}
                        />
                        {errors.location?.type === 'required' &&
                            <p className='text-bg-light'> {t('Event location is required')}</p>}
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Select onChange={onChange}>
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
                                      onChange={onChange}
                        />
                        {errors.price?.type === 'required' &&
                            <p className='text-bg-light'> {t('Event price is required')}</p>}
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Control type='text'
                                      placeholder={t('Start event date/time')} {...register('startEventDateTime')}
                                      onChange={onChange}
                        />
                        {errors.startEventDateTime?.type === 'required' &&
                            <p className='text-bg-light'> {t('Event start date/time is required')}</p>}
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Control type='text'
                                      placeholder={t('End event date time')} {...register('endEventDateTime')}
                                      onChange={onChange}
                        />
                        {errors.endEventDateTime?.type === 'required' &&
                            <p className='text-bg-light'> {t('Event end date/time is required')}</p>}
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <textarea className="form-control"
                                  rows="3"
                                  placeholder={t('Description')} {...register('description')}
                                  onChange={onChange}></textarea>
                        {errors.description?.type === 'required' &&
                            <p className='text-bg-light'> {t('Event description is required')}</p>}
                    </Form.Group>
                    <button className='button-30-1' onClick={onSubmit}>
                        {t('Save')}
                    </button>
                </Form>
            </>
        )
    }
};

export default AddEvent;
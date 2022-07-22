import {Icon} from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import {useForm} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'
import {useState} from "react";
import {useTranslation} from "react-i18next";

const Register = () => {
    const {t}=useTranslation();
    const[type,setType] = useState('password');
    const[icon,setIcon] = useState(eyeOff);

    const handleToggle = () =>{
        if(type==='password'){
            setIcon(eye);
            setType('text');
        }else{
            setIcon(eyeOff);
            setType('password')
        }
    };

    const schema = yup.object().shape({
        nickname: yup.string().required(),
        email: yup.string().email().required(),
        city: yup.string().required(),
        phoneNumber: yup.string().min(9).max(9).required(),
        password: yup.string().min(6).max(10).required()
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        mode:'onTouched'
    });
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className='registerForm'>
            <h4 className='text-center'>{t('Sign Up')}</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-4'>
                    <input type='text' className='form-control font-weight-bolt'
                           placeholder={t('Nickname')} {...register('nickname')}/>
                    {errors.nickname?.type === 'required' &&
                        <p className='text-bg-light'>{t('Nickname is required')}</p>}
                </div>
                <div className='mt-2'>
                    <input type='text' className='form-control font-weight-bolt'
                           placeholder={t('Email')} {...register('email')}/>
                    {errors.email?.type === 'required' &&
                        <p className='text-bg-light'>{t('Email is required')}</p>}
                    {errors.email?.type === 'email' &&
                        <p className='text-bg-light'> {t('Enter a valid email (ex. email@gmail.com)')}</p>}
                </div>
                <div className='mt-2'>
                    <input type='text' className='form-control font-weight-bolt'
                           placeholder={t('City')} {...register('city')}/>
                    {errors.city?.type === 'required' &&
                        <p className='text-bg-light'> {t('City is required')}</p>}
                </div>
                <div className='mt-2'>
                    <input type='text' className='form-control font-weight-bolt'
                           placeholder={t('Phone number')} {...register('phoneNumber')}/>
                    {errors.phoneNumber?.type === 'required' &&
                        <p className='text-bg-light'> {t('Phone number is required')}</p>}
                    {errors.phoneNumber?.type === 'min' &&
                        <p className='text-bg-light'> {t('The phone number must be 9 digits long')}</p>}
                    {errors.phoneNumber?.type === 'max' &&
                        <p className='text-bg-light'> {t('The phone number must be 9 digits long')} </p>}
                </div>
                <div className='mt-2 input-field'>
                    <input type={type} className='form-control font-weight-bolt'
                           placeholder={t('Password')} {...register('password')}/>
                    <span onClick={handleToggle}><Icon icon={icon} size={15}/></span>
                    {errors.password?.type === 'required' &&
                        <p className='text-bg-light'> {t('Password is required')}</p>}
                    {errors.password?.type === 'min' &&
                        <p className='text-bg-light'>{t('Password length must be at least 6')}</p>}
                </div>
                <button className='button-30-1 mt-4' role='button'>{t('Sign Up ')}</button>
            </form>
        </div>
    )
}

export default Register;


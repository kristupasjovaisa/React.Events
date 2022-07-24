import {Icon} from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {login} from "../../../slices/authSlice";

const Login = () => {

    const [formData, setFormData] = useState({
        nickname: '',
        password: '',
    })

    const {nickname, password} = formData
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const {t} = useTranslation();
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        } else {
            setIcon(eyeOff);
            setType('password')
        }
    };

    const schema = yup.object().shape({
        nickname: yup.string().required(),
        password: yup.string().required()
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        mode: 'onTouched',
    });

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (formValue) => {
        const {nickname, password} = formValue;
        setLoading(true);

        dispatch(login({nickname, password}))
            .unwrap()
            .then(() => {
                navigate('/')
            })
            .catch(() => {
                setLoading(false);
            });
    };

    const routeChange = event => {
        const path = '/register';
        navigate(path);
    }
    return (
        <div className='loginForm'>
            <h4 className='text-center'>{t('Sign In')}</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-4'>
                    <input
                        type='text'
                        className='form-control font-weight-bolt'
                        placeholder={t('Nickname')} {...register('nickname')}
                        name='nickname'
                        onChange={onChange}
                    />
                    {errors.nickname?.type === 'required' &&
                        <p className='text-bg-light'> {t('Nickname is required')}</p>}
                </div>
                <div className='mt-3 input-field'>
                    <input
                        type={type} className='form-control font-weight-bolt'
                        placeholder={t('Password')}{...register('password')}
                        name='password'
                        onChange={onChange}
                    />
                    <span onClick={handleToggle}><Icon icon={icon} size={15}/></span>
                    {errors.password?.type === 'required' &&
                        <p className='text-bg-light'> {t('Password is required')}</p>}
                </div>
                <div>
                    <button className='button-30-1 mt-4' role='button'> {t('Login')} </button>
                </div>
                <div className='line'></div>
                <div className='btn-center mt-2'>
                    <button className='button-30-2 ' onClick={routeChange} role='button'> {t('Register')}</button>
                </div>
            </form>
        </div>
    )
}

export default Login;
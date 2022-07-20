import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const schema = yup.object().shape({
        nickname: yup.string().required(),
        password: yup.string().required()
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        mode:'onTouched',
    });
    const onSubmit = (data) => {
        console.log(data)
    }

    const navigate = useNavigate();
    const routeChange = event =>{
        const path = '/register';
        navigate(path);
    }
    return (
        <div className='loginForm'>
            <h4 className='text-center'>Sign In</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-4'>
                    <input type='text' className='form-control font-weight-bolt'
                           placeholder='Nickname' {...register('nickname')}/>
                    {errors.nickname?.type === 'required' &&
                        <p className='text-bg-light'> Nickname is required</p>}
                </div>
                <div className='mt-3'>
                    <input type='password' className='form-control font-weight-bolt'
                           placeholder='Password'{...register('password')}/>
                    {errors.password?.type === 'required' &&
                        <p className='text-bg-light'> Password is required</p>}
                </div>
                <div>
                    <button className='button-30-1 mt-4' role='button'> Login </button>
                </div>
             <div className='line'></div>
                <div className='btn-center mt-2'>
                    <button className='button-30-2 ' onClick={routeChange} role='button'> Register</button>
                </div>
            </form>
        </div>
    )
}

export default Login;
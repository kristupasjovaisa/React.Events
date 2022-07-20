import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

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
    return (
        <div className='loginForm'>
            <h4 className='text-center'>Sign In</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nickname</label>
                    <input type='text' className='form-control font-weight-bolt'
                           placeholder='Your nickname' {...register('nickname')}/>
                    {errors.nickname?.type === 'required' &&
                        <p className='text-bg-light'> Nickname is required</p>}
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' className='form-control font-weight-bolt'
                           placeholder='Your password'{...register('password')}/>
                    {errors.password?.type === 'required' &&
                        <p className='text-bg-light'> Password is required</p>}
                </div>
                <button className='button-30 mt-4' role='button'> Sign in</button>
            </form>
        </div>
    )
}

export default Login;
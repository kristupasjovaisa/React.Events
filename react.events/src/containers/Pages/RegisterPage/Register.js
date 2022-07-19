import {useForm} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'

const Register = () => {

    const schema = yup.object().shape({
        nickname: yup.string().required(),
        email: yup.string().email().required(),
        city: yup.string().required(),
        phoneNumber: yup.string().min(9).max(9).required(),
        password: yup.string().min(5).max(10).required()
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
            <h4 className='text-center'>Sign Up</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nickname</label>
                    <input type='text' className='form-control font-weight-bolt'
                           placeholder='Your nickname' {...register('nickname')}/>
                    {errors.nickname?.type === 'required' &&
                        <p className='text-bg-light'> Nickname is required</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' className='form-control font-weight-bolt'
                           placeholder='Your email' {...register('email')}/>
                    {errors.email?.type === 'required' &&
                        <p className='text-bg-light'> Email is required</p>}
                    {errors.email?.type === 'email' &&
                        <p className='text-bg-light'> Enter a valid email (ex. email@gmail.com)</p>}
                </div>
                <div>
                    <label>City</label>
                    <input type='text' className='form-control font-weight-bolt'
                           placeholder='Your city' {...register('city')}/>
                    {errors.city?.type === 'required' &&
                        <p className='text-bg-light'> City is required</p>}
                </div>
                <div>
                    <label>Phone number</label>
                    <input type='text' className='form-control font-weight-bolt'
                           placeholder='Your phone number' {...register('phoneNumber')}/>
                    {errors.phoneNumber?.type === 'required' &&
                        <p className='text-bg-light'> Phone number is required</p>}
                    {errors.phoneNumber?.type === 'min' &&
                        <p className='text-bg-light'> The phone number must be 9 digits long </p>}
                    {errors.phoneNumber?.type === 'max' &&
                        <p className='text-bg-light'> The phone number must be 9 digits long </p>}
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' className='form-control font-weight-bolt'
                           placeholder='Your password'{...register('password')}/>
                    {errors.password?.type === 'required' &&
                        <p className='text-bg-light'> Password is required</p>}
                    {errors.password?.type === 'min' &&
                        <p className='text-bg-light'> Password length must be at least 6</p>}
                </div>
                <button className='button-30 mt-4' role='button'> Sign up</button>
            </form>
        </div>
    )
}

export default Register;


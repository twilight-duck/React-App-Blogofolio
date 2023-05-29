import { FC, useState } from 'react';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Typography } from '../../components/Typography/Typography';
import './SignIn.scss';


export const SignIn: FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail= (newValue: string) => {
        setEmail(newValue);
    }

    const handleChangePassword= (newValue: string) => {
        setPassword(newValue);
    }

    const handleSubmit = () => {
        console.log('Форма отправляется на сервер');
    }

    return (
        <div className='sign-in'>
             <Typography content='Sign In' type='H1'/>
             <form className='sign-in-form'>
             <Input
                title='Email'
                placeholder='Your Email'
                value={email}
                handleChange={handleChangeEmail}
            />
             <Input
                title='Password'
                placeholder='Your Password'
                value={password}
                handleChange={handleChangePassword}
            />
            <p className='sign-in-form-reset_password'>
                Forgot Password?
            </p>
            <Button content='Sign In' onClick={handleSubmit} type='primary'/>
            <p className='sign-in-form-description'>
                Don’t have an account? {' '}
                <a className='sign-up form-link' href="https://example.com">
                        Sign Up
                    </a>
            </p>
             </form>
        </div>
    )
};

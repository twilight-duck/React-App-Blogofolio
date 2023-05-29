import { FC, useState } from 'react';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Typography } from '../../components/Typography/Typography';
import './SignUp.scss';


export const SignUp: FC= () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangeName = (newValue: string) => {
        setName(newValue);
    }

    const handleChangeEmail= (newValue: string) => {
        setEmail(newValue);
    }

    const handleChangePassword= (newValue: string) => {
        setPassword(newValue);
    }

    const handleChangeConfirmPassword= (newValue: string) => {
        setConfirmPassword(newValue);
    }

    const handleSubmit = () => {
        console.log('Форма отправляется на сервер');
    }

    return (
        <div className='sign-up'>
            <Typography content='Sign Up' type='H1'/>
            
            <form className='sign-up-form'>
            <Input
                title='Name'
                placeholder='Your Name'
                value={name}
                handleChange={handleChangeName}
            />
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
             <Input
                title='Confirm Password'
                placeholder='Confirm Password'
                value={confirmPassword}
                handleChange={handleChangeConfirmPassword}
            />
            <Button content='Sign Up' onClick={handleSubmit} type='primary'/>
                <p className='sign-up-form-description'>
                    Already have an account? {' '}
                    <a className='sign-up form-link' href="https://example.com">
                        Sign In
                    </a>
                </p>
            </form>
        </div>
    )
};


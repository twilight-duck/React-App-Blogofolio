import { FC } from 'react';
import { Button } from '../../components/Button/Button';
import { Typography } from '../../components/Typography/Typography';
import './RegistrationConfirmation.scss';


export const RegistrationConfirmation: FC = () => {

    const handleClickHome = () => {
        console.log("The click is handled");
    }

    return (
        <div className='registration-confirmation'>
            <Typography content='Registration Confirmation' type='H1'/>
            <div>
                <p>
                Please activate your account with the activation 
                link in the email example@gmail.com.Please, check your email
                </p>
                <Button content='Go to Home' onClick={handleClickHome} type='primary'/>
            </div>
        </div>
    )
};

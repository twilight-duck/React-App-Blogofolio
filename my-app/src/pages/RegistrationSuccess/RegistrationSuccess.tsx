import { FC } from 'react';
import { Button } from '../../components/Button/Button';
import { Typography } from '../../components/Typography/Typography';
import './RegistrationSuccess.scss';

export const RegistrationSuccess: FC = () => {

    const handleClickHome = () => {
        console.log("The click is handled");
    }

    return (
        <div className='registration-succesful'>
            <Typography content='Success' type='H1'/>
            <div>
                <p>
                Email confirmed.
                Your registration is now completed
                </p>
                <Button content='Go to Home' onClick={handleClickHome} type='primary'/>
            </div>
        </div>
    )
};

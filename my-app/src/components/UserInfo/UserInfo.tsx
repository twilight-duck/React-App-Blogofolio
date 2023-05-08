import { FC } from 'react';
import './UserInfo.scss';

interface IUserInfo {
    userName: string;
}

export const UserInfo: FC<IUserInfo> = ({userName}) => {

    const generateInitials = (userName: string) => {
        return userName.split(' ').map((n) => n[0]).join('').toUpperCase();
    }

    return(
        <div className='userinfo'>
            <div className='userinfo__initials'>{generateInitials(userName)}</div>
            <div className='userinfo__name'>{userName}</div>
        </div>
    )
}
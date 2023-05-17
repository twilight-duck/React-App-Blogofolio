import { FC } from 'react';
import thumbsDown from '../../assets/icons/Icon-Thumbs-Down.svg';
import thumbsUp from '../../assets/icons/Icon-Thumbs-Up.svg';
import favorites from '../../assets/icons/favorites.svg';
import '../CardActions/CardActions.scss';
import { MenuCard } from '../MenuCard/MenuCard';


export const CardActions: FC = () => {
    return(
        <div className='actions-card'>
            <div className='actions-card__box'>
                <div className='actions-card__count-box'>
                    <img src={thumbsUp} alt="thumbsUp" />
                    <span>20</span>
                </div>
                <div className='actions-card__count-box'>
                    <img src={thumbsDown} alt="thumbsDown" />
                    <span>3</span>
                </div>
            </div>
            <div className='actions-card__box'>
                <img src={favorites} alt="favorites" />
                <MenuCard />
            </div>
        </div>
    )
}
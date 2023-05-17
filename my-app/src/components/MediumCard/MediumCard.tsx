import { FC } from 'react';
import './MediumCard.scss';
import { CardDate } from '../CardDate/CardDate';
import { Typography } from '../Typography/Typography';
import { CardActions } from '../CardActions/CardActions';

interface IMediumCard {
    id: number;
    title: string;
    image: string;
    date: string;
}

export const MediumCard: FC<IMediumCard> = ({id, date, image, title}) => {
    return (
        <div className='medium-card'>
            <div className='medium-card__img-box'>
                <img className='medium-card__img' src={image} alt={title} />
            </div>
            <CardDate date={date} />
            <Typography content={title} type='H3' isLink/>
            <div className='medium-card__actions'>
                <CardActions />
            </div>
        </div>
    )
};
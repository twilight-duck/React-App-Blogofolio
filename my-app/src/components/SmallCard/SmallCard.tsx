import { FC } from 'react';
import { CardDate } from '../CardDate/CardDate';
import { Typography } from '../Typography/Typography';
import './SmallCard.scss';
import { CardActions } from '../CardActions/CardActions';

interface ISmallCard {
    id: number;
    title: string;
    image: string;
    date: string;
}

export const SmallCard: FC<ISmallCard> = ({id, date, image, title}) => {
    return (
        <div className='small-card'>
            <div className='small-card__content'>
                <div>
                    <CardDate date={date} />
                    <Typography content={title} type='H3' isLink/>
                </div>
                <div>
                    <div className='small-card__img-box'>
                        <img className='small-card__img' src={image} alt={title} />
                    </div>
                </div>
            </div>
            <CardActions />
        </div>
    )
};
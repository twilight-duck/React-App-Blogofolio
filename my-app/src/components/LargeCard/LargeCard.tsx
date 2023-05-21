import { FC } from 'react';
import { CardDate } from '../CardDate/CardDate';
import '../LargeCard/LargeCard.scss';
import { Typography } from '../Typography/Typography';
import { CardActions } from "../CardActions/CardActions";



interface ILargeCard {
    id: number;
    image: string;
    text: string;
    date: string;
    title: string;
}


export const LargeCard: FC<ILargeCard> =  ({id, image, text, date, title}) => {

    return(
        <div className='large_card'>
            <div className="large_card-content">
                <div>
                    <CardDate date = {date}/>
                    <Typography content={title} type='H2' isLink/>
                    <p className='large_card-text'>{text}</p>
                </div>
                <div>
                    <div className='large_card-img-box'>
                        <img className='large_card-img' src={image} alt={title} />
                    </div>
                </div>
            </div>
            <CardActions/>
        </div>
    )
}



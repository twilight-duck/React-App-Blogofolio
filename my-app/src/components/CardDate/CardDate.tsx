import { FC } from 'react';
import '../CardDate/CardDate.scss';

interface ICardDate{
    date: string;
}

export const CardDate: FC<ICardDate> = ({date}) => {

    return(
    <div className='card_date'>
        {date}
    </div>
    )
}
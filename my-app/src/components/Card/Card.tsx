import { FC } from 'react';
import '../Card/Card.scss'
import { LargeCard } from '../LargeCard/LargeCard';
import { MediumCard } from '../MediumCard/MediumCard';
import { SmallCard } from '../SmallCard/SmallCard';


interface ICard {
    type: 'full' | 'medium' | 'small';
    id: number;
    image: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    author: number;
}


export const Card: FC<ICard> = ({type, id, image, text, title, date}) => {

    const renderCard = () => {
        if (type === 'full') {
            return <LargeCard id={id} title={title} date={date} image={image} text={text}/>
        }
        if (type === 'medium') {
            return <MediumCard id={id} title={title} date={date} image={image}/>
        }
        if (type === 'small') {
            return <SmallCard id={id} title={title} date={date} image={image}/>
        }
    }

    return (
        <>
            {renderCard()}
        </>
    )
};

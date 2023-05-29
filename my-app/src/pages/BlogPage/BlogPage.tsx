import { FC } from 'react';
import { CardList } from '../../components/CardsList/CardsList';
import { Tabs } from '../../components/Tabs/Tabs';
import { Typography } from '../../components/Typography/Typography';
import './BlogPage.scss';


export const BlogPage: FC = () => {
    return (
        <div className='blog'>
            <Typography content='Blog' type='H1'/>
            <div className='blog__tabs'>
                <Tabs/>
            </div>
            <CardList/>
        </div>
    )
};

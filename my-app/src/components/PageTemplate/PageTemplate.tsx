import { FC, ReactNode } from 'react';
import '../PageTemplate/PageTemplate.scss';
import { Header } from "../Header/Header";
import { Container } from "../Container/Container";
import { Footer } from '../Footer/Footer';


interface IPageTemplate{
    children: ReactNode;
}

export const PageTemplate: FC<IPageTemplate> = ({children}) => {
    return (
        <div>
            <Header/>
            <Container>
                {children}
            <Footer/>
            </Container>
        </div>
    )
};

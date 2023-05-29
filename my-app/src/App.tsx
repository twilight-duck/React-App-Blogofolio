import logo from './logo.svg';
import './App.scss';
import { Button } from './components/Button/Button';
import { UserInfo } from './components/UserInfo/UserInfo';
import { Typography } from './components/Typography/Typography';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import { Tabs } from './components/Tabs/Tabs';
import { Form } from './components/Form/Form';
import { Card } from './components/Card/Card'
import { CardList } from './components/CardsList/CardsList';
import { PageTemplate } from "./components/PageTemplate/PageTemplate";
import { SignUp } from './pages/SignUp/SignUp';
import { RegistrationConfirmation } from './pages/RegistrationConfirmation/RegistrationConfirmation';
import { RegistrationSuccess } from "./pages/RegistrationSuccess/RegistrationSuccess";
import { SignIn } from './pages/SignIn/SignIn';
import { SelectedPosts } from './pages/SelectedPosts/SelectedPosts';
import { BlogPage } from './pages/BlogPage/BlogPage';



function App() {

  const handleClick = () =>{
    console.log(1);
  }

  return (
    <div className="app">
      <PageTemplate>
       <BlogPage/>
      </PageTemplate>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.scss';
import { Button } from './components/Button/Button';
import { UserInfo } from './components/UserInfo/UserInfo';
import { Typography } from './components/Typography/Typography';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import { Tabs } from './components/Tabs/Tabs';

function App() {

  const handleClick = () =>{
    console.log(1);
  }

  return (
    <div className="app">
      <Button type = 'primary' content = 'Click me' isDisabled = {false} onClick = {handleClick}/>
      <Button type = 'secondary' content = 'Click me' isDisabled = {false} onClick = {handleClick}/>
      <Button type = 'primary' content = 'Click me' isDisabled = {false} onClick = {handleClick}/>
      <Button type = 'secondary2' content = 'Click me' isDisabled = {false} onClick = {handleClick}/>
      <Button type = 'primary' content = 'Click me' isDisabled = {false} onClick = {handleClick}/>
      <Button type = 'secondary' content = 'Click me' isDisabled = {true} onClick = {handleClick}/>
      <UserInfo userName='Andrzjei Sapkowski'/>
      <Typography content='Test' type='H1'/>
      <Typography content='Test' type='H2'/>
      <Typography content='Test' type='H3'/>
      <Typography content='Test' type='subline'/>
      <Typography content='Test' type='textPrimary'/>
      <Typography content='Test' type='textSecondary'/>
      <BurgerMenu />
      <Tabs />
    </div>
  );
}

export default App;

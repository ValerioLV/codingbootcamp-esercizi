import { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Carousel from './components/carousel';
import ProdList from './components/prodList';
import Paragraph from './components/paragraph';
import "./main.css";

const Main = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if(theme === 'light'){
      setTheme('dark');
    }else{
      setTheme('light');
    }};

  return (
    <div className={`Main ${theme}`}>
      <Header />
      <button className={`toggleBtn ${theme}`} onClick={toggleTheme}>Dark Mode</button>
      <Carousel />
      <ProdList />
      <Paragraph something="bottom text"/>
      <Footer />
    </div>
  );
};

export default Main;
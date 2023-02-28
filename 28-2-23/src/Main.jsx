import Header from './components/header';
import Footer from './components/footer';
import Paragraph from './components/paragraph';
import "./main.css";

const Main = () => {
  return (
    <div className="Main">
      <Header />
      <Paragraph something="bottom text"/>
      <Footer />
    </div>
  );
};

export default Main;
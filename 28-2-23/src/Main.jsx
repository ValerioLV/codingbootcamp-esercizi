import { productsList } from './data/ProductsList';
import Header from './components/header';
import Footer from './components/footer';
import ProdList from './components/prodList';
import Paragraph from './components/paragraph';
import "./main.css";

const Main = () => {
  return (
    <div className="Main">
      <Header />
      <ProdList listData={productsList} />
      <Paragraph something="bottom text"/>
      <Footer />
    </div>
  );
};

export default Main;
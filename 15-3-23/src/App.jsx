import MiniList from './components/miniList'
import Header from './components/header'
import CardList from './components/cardList'
import './App.css'

function App() {

  return (
    <div className="App">
      <Header />
      <MiniList />
      <CardList title={"Skincare"} endpoint={"/category/skincare"} />
    </div>
  )
}

export default App

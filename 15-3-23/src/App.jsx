import { useState } from "react";
import MiniList from "./components/miniList";
import Header from "./components/header";
import CardList from "./components/cardList";
import ProdModal from "./components/prodModal";
import "./App.css";

function App() {
	const [modalData, setModalData] = useState({
		productData: {},
		isVisible: false,
	});
	const [cartList, setCartList] = useState(
		JSON.parse(
			localStorage.getItem("cartItems"),
		) || [],
	);

	return (
		<div className="App">
			<Header
				cartList={cartList}
				setCartList={setCartList}
			/>
			<MiniList />
			<CardList
				title={"Skincare"}
				endpoint={"/category/skincare"}
				setModalData={setModalData}
			/>
			{modalData.isVisible && (
				<ProdModal
					prodData={modalData.productData}
					setModalData={setModalData}
					setCartList={setCartList}
					cartList={cartList}
				/>
			)}
		</div>
	);
}

export default App;

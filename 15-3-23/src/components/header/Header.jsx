import { useState } from "react";
import Cart from "../cart";
import "./index.css";

const Header = ({ cartList, setCartList }) => {
	const [isCartVisible, setIsCartVisible] =
		useState(false);

	const ClearCart = () => {
		localStorage.clear();
		setCartList([]);
	};

	return (
		<nav className="Header">
			<ul className="Header__links">
				<a href="#">Home</a>
				<a href="#">Contattaci</a>
				<a href="#">Chi Siamo</a>
			</ul>
			<form className="Header__search">
				<input
					type="text"
					placeholder="Cerca un  tipo..."
				/>
				<input
					type="button"
					value="Cerca"
				/>
			</form>
			<div className="Header__cart">
				<p
					onClick={() =>
						setIsCartVisible((prev) => !prev)
					}>
					{/* {cartList.length
						? JSON.parse(
								localStorage.getItem("cartItems"),
						  ).length
						: JSON.parse(
								localStorage.getItem("cartItems"),
						  ).length} */}
					{cartList ? cartList.length : 0}
					🛒
				</p>
				<button onClick={ClearCart}>
					Svuota Carrello
				</button>
			</div>
			{isCartVisible && (
				<Cart
					cartList={cartList}
					setCartList={setCartList}
				/>
			)}
		</nav>
	);
};

export default Header;

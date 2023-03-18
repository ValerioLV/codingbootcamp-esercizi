import "./index.css";
import CartItem from "../cartItem";

const Cart = ({ cartList, setCartList }) => {
	return (
		<div className="Cart">
			{cartList.map((product) => (
				<CartItem
					product={product}
					setCartList={setCartList}
					key={Math.floor(Math.random() * 1000)}
				/>
			))}
			<p className="Cart__total">
				Totale:{" "}
				{cartList.reduce(
					(accumulator, curValue) => {
						return accumulator + curValue.price;
					},
					0,
				)}
			</p>
		</div>
	);
};

export default Cart;

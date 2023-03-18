import "./index.css";

const CartItem = ({ product, setCartList }) => {
	const ProDelete = () => {
		setCartList((prev) =>
			prev.filter(
				(item) =>
					item.orderId !== product.orderId,
			),
		);
	};

	return (
		<div className="CartItem">
			<p>{product.title}</p>
			<p>${product.price}</p>
			<button onClick={ProDelete}>x</button>
		</div>
	);
};

export default CartItem;

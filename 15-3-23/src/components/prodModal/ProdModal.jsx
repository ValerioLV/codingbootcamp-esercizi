import "./index.css"

const ProdModal = ({prodData, setModalData, setCartList, cartList}) => {
    const onHandleClose = () => {
        setModalData((prev) => ({
            ...prev,
            isVisible: false
        }));
    }

    const onHandleAddCart = () => {
        const CartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        localStorage.setItem("cartItems", JSON.stringify([...CartItems, prodData]))

        setCartList((prev) => [...prev, prodData])
    }

    return(
        <div className="ProdModal">
            <div className="ProdModal__content">
                <button className="ProdModal__close" onClick={onHandleClose}>X</button>
                <div className="ProdModal__data">
                    <h2 className="ProdModal__data--title">{prodData.title}</h2>
                    <div className="ProdModal__images">
                        {prodData.images.map((img) => <img src={img} alt={prodData.title} key={img} />)}
                    </div>
                    <p>{prodData.description}</p> 
                    <span>Costo: ${prodData.price}</span>
                </div>
                <button className="ProdModal__buy" onClick={onHandleAddCart}>Aggiungi al carrello 🛒</button>
            </div>
            
        </div>
    )
}

export default ProdModal
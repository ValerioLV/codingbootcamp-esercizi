import "./index.css"

const ProductCard = ({productData, setModalData}) => {
    const onHandleClick = () => {
        setModalData(() => ({
            productData,
            isVisible: true
        }));
    }

    return (
        <div className="ProductCard" onClick={onHandleClick}>
            <img className="ProductCard__img" src={productData.thumbnail} alt={productData.title} />
            <p>{productData.description}</p>
            <p className="ProductCard_price">${productData.price}</p>
        </div>
    )
};

export default ProductCard
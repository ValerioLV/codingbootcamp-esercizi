import "./index.css"

const ProductCard = ({productData}) => {
    return (
        <div className="ProductCard">
            <img className="ProductCard__img" src={productData.thumbnail} alt={productData.title} />
            <p>{productData.description}</p>
            <p className="ProductCard_price">${productData.price}</p>
        </div>
    )
};

export default ProductCard
import "./index.css";

const SingleProd = ({ prodData }) => {
    const onImageClick = () => window.open(prodData.images[0]);

    return (
      <div
        className="SingleCard">

        <img onClick={onImageClick} src={prodData.thumbnail} alt="Foto del prodotto" />
        <div className="SingleCard__text-content">
          <h4>{prodData.title}</h4>
          <p>{prodData.description}</p>
          <p>Prezzo: {prodData.price}€</p>
          <p>Prodotto da: {prodData.brand}</p>
          <p>Scontato del { parseInt(prodData.discountPercentage) }%</p>
        </div>

      </div>
    );
};

export default SingleProd
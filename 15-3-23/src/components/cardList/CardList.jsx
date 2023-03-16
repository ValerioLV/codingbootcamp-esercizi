import { useEffect, useState } from "react"
import { GET } from "../../get"
import ProductCard from "../productCard"
import "./index.css"

const CardList = ({title, endpoint, setModalData}) => {
    const [prodsList, setProdsList] = useState([])

    useEffect(() => {
        GET(endpoint)
        .then((data) => setProdsList(() => data.products));
    }, [])

    return(
        <div className="CardList">
            <h1 className="CardList__title">{title}</h1>
            <div className="CardList__products">
                {prodsList.map((product) => <ProductCard setModalData={setModalData} productData={product} key={product.id} />)}
            </div>
        </div>
    )
    
}

export default CardList
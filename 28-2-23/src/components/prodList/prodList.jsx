import { useState, useEffect } from "react";
import SingleProd from "../singleProd";
import "./index.css"



const ProdList = ({setSingleProductModal}) => {
    const [dataList, setDataList] = useState([]);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10);

    const filterById = (min, max) => {
        setMin(min);
        setMax(max);
    };

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=50")
        .then((res) => res.json())
        .then((data) => setDataList(data.products));
    }, []);

    return (
        <div className="Products">
            <div className="prodList">
                {dataList.filter((oneProd) => oneProd.id > min && oneProd.id <= max)
                .map((oneProd) => (
                    <SingleProd prodData={oneProd} key={oneProd.id} setSingleProductModal={setSingleProductModal} />
                ))}
            </div>
            
        
            <div className="indexing">
                <button onClick={() => filterById(0, 9)}>1</button>
                <button onClick={() => filterById(9, 19)}>2</button>
                <button onClick={() => filterById(19, 29)}>3</button>
                <button onClick={() => filterById(29, 39)}>4</button>
                <button onClick={() => filterById(39, 49)}>5</button>
                <button onClick={() => filterById(49, 50)}>6</button>
            </div>
        </div>
    );
};

export default ProdList
import SingleProd from "../singleProd";
import "./index.css"

const ProdList = ({listData}) => {
    return (
        <div className="Products">
            {listData.map((singleData) => (
                <SingleProd prodData={singleData} />
            ))}
        </div>
    );
};

export default ProdList
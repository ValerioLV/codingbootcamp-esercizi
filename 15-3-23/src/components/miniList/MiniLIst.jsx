import { useEffect, useState } from "react";
import { GET } from "../../get";
import MiniCard from "../miniCard";
import "./index.css"

const MiniList = () => {
    const [miniList, setMiniList] = useState([]);

    useEffect(() => {
        GET("/category/smartphones")
        .then((data) => setMiniList(() => data.products));
    }, []);
    
    return (
        <div className="MiniList">
            {miniList.map((minicard) => <MiniCard images={minicard.images} title={minicard.title} key={minicard.id}/>)}
        </div>
    )
};

export default MiniList
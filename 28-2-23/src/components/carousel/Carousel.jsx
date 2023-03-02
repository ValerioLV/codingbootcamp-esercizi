import { useState } from "react";
import { images } from "../../data/images";
import "./index.css"

const Carousel = () => {
    let [shownImg, setShownImg] = useState(0);

    return (
        <div className="Carousel">
            <img src={images[shownImg]} alt="image" />

            <div className="btns">
                <button onClick={() => {
                    if(shownImg === 0){}
                    else{setShownImg(shownImg - 1)}
                }}>{"<"}</button>

                <button onClick={() => {
                    if(shownImg === images.length - 1){}
                    else{setShownImg(shownImg + 1)}
                }}>{">"}</button>
            </div>
            
        </div>
    );
};

export default Carousel
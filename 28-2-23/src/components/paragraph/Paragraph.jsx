import {textContainer} from "../../data/textContainer";
import SingleText from "../singleText";
import './index.css'

const Paragraph = ({something}) => {
    return(
        <div className='Text'>
            <p className="ResponsiveText">{something}</p>
            <div className="textContain">
                {textContainer.map((text) => (
                    <SingleText text={text} />
                ))}
            </div>
            
        </div>
    );
};

export default Paragraph
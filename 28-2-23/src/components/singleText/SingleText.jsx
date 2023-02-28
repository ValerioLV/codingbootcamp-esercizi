import "./index.css";

const SingleText = ({text}) => {
    return(
        <div className="OneText">
            <p>{text.name}</p>
            <p>{text.lastName}</p>
            <p>{text.desc}</p>
        </div>
    );
};

export default SingleText
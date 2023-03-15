import "./index.css"

const MiniCard = ({images, title}) => {
    const onImgClick = () => {
        window.open(images[0], "_blank")
    }

    return(
        <img onClick={onImgClick} className="Mini__photo" src={images[0]} alt={title} />
    )  
}

export default MiniCard
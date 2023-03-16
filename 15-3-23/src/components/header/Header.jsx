import "./index.css"

const Header = ({cartList}) => {
    return (
        <nav className="Header">
            <ul className="Header__links">
                <a href="#">Home</a>
                <a href="#">Contattaci</a>
                <a href="#">Chi Siamo</a>
            </ul>
        <form className="Header__search">
            <input type="text" placeholder="Cerca un  tipo..." />
            <input type="button" value="Cerca" />
        </form>
        <div className="Header__cart">
            <p>{cartList.length ? JSON.parse(localStorage.getItem("cartItems")).length : 0}🛒</p>
        </div>
        </nav>
    )
};

export default Header
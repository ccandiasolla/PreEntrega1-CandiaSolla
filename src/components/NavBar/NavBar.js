import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <h3>Tienda CCTV</h3>
            <div className="navbar-main">
                <button className="navbar-btn">Cámaras</button>
                <button className="navbar-btn">Grabadores</button>
                <button className="navbar-btn">Cables</button>
                <button className="navbar-btn">Accesorios</button>
                <button className="navbar-btn">Otros</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
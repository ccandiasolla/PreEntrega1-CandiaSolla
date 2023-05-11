import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navBar">
            <h3>Tienda CCTV</h3>
            <div className="nav-links">
                <NavLink className="links" to={`/category/Camaras`}>Cámaras</NavLink>
                <NavLink className="links" to={`/category/Grabadores`}>Grabadores</NavLink>
                <NavLink className="links" to={`/category/Accesorios`}>Accesorios</NavLink>
             </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
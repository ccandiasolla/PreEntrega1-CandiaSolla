import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to='/' className='Option'>Mostrar todos los productos</Link>
            </div>
        )
    }

    return (
        <div>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              id={product.id}
              name={product.name}
              img={product.img}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
          <h3>Total: ${total}</h3>
          <button onClick={() => clearCart()} className="Button">
            Vaciar carrito
          </button>
          <Link to="/checkout" className="Option">
            Realizar compra
          </Link>
        </div>
      );
      
}

export default Cart
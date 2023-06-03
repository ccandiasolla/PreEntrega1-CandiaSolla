// import logo from './logo.svg';
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
        <NavBar className="nav"/>
        <Routes>
          <Route path='/' element= {<ItemListContainer greeting={`Bienvenido a tienda CCTV`}/>}/>
          <Route path='/category/:categoryId' element= {<ItemListContainer />}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element= {<h1>Gracias por su compra!</h1>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

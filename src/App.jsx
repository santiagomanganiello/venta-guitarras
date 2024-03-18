import './App.css'
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom'
import Home from './pages/Home/Home'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/navbar/Navbar'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'
import PageNotFound from './components/PageNotFound/PageNotFound'
import PrivateRoute from './pages/routing/PrivateRoute'
import CartProvider from './pages/routing/context/cartContext'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<PrivateRoute />}>
          <Route path='/products' element={<ItemListContainer />}/>
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/products/:categoryId' element={<ItemListContainer />} />
        <Route path='/product/:productId' element={<ItemDetailConteiner />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  ) 
}

export default App

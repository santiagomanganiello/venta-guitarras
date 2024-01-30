import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/navbar/Navbar'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ItemListContainer />} />
        <Route path='/products/:categoryId' element={<ItemListContainer />} />
        <Route path='/products/:productId' element={<ItemDetailConteiner />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

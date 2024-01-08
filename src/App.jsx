import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/navbar/index'

function App() {

  return (
  <>
    <NavBar/>
    <br></br>
    <ItemListContainer 
      prueba1={"contenedor1"} 
      prueba2={"contenedor2"}
    />
  </>
  )
}

export default App

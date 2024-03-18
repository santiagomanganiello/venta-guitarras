import { createContext, useContext, useState } from 'react'

const cartContext = createContext()

//createContext nos devuelve 2 componentes un provider y un consumer
//provider es un componente que debe envolver a toda la aplicacion para que todos los componentes puedan
//acceder a los datos que se encuentran en el contexto
//Consumer es un componente que debe envolver a los componentes que necesiten acceder a los datos del contexto

export const { Provider } = cartContext

// custom hook para acceder al contexto desde cualquier componente
export const useCartContext = () => useContext(cartContext)

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [ItemsTotal, setItemsTotal] = useState(0) //cantidad de items en el carrito
    const [total, setTotal] = useState(0)

    const addItem = (item, quantity) => {
        setItemsTotal(ItemsTotal + quantity)
        setTotal(total + item.price * quantity)
    
        if (isInCart(item.id)) {
            const newCart = cart.map((cartItem) => {
                if (cartItem.item.id === item.id) {
                    return {...cartItem, quantity: cartItem.quantity + quantity }
                } else {
                    return cartItem 
                }
            })
            setCart(newCart)
        } else {
            setCart(prevCart => [...prevCart, {item, quantity}])
        }   
    }
    const removeItem = (id) => {
    }

    const clear = () => {
        setCart([])
        setItemsTotal(0)
        setTotal(0)
    }

    const isInCart = (id) => cart.find((item) => item.item.id === id);
    const valorDelContexto = { cart, ItemsTotal, addItem, removeItem, clear, total }

    return <Provider value={valorDelContexto}>{children}</Provider>
}

export default CartProvider
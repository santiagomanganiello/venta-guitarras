import React, { useContext } from "react";
import { useCartContext } from "../../pages/routing/context/cartContext";
import styles from '../Cart/style/index.module.css';

const CartContent = () => {
    const { id, cart, removeItem, clear, total } = useCartContext();
    return (
        <table className={styles.default}>
            <thead>
                <tr>
                    <th>Cantidad de productos</th>
                    <th>Nombre del producto</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                    <th>Remover item</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(cartItem => (
                    
                        <tr>
                        <td>{cartItem.quantity}</td>
                        <td>{cartItem.item.title}</td>
                        <td>{cartItem.item.categoria}</td>
                        <td>${cartItem.item.price}</td>
                        <td>
                        <button onClick={() => removeItem(cartItem.item.id)}>Remover</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="6">
                        <button className={styles.finalizar}>Finalizar compra</button>
                        <button className={styles.vaciar} onClick={() => clear()}>Vaciar Carrito</button>
                    </td>
                </tr>
            </tfoot>
            <tfoot>
                <tr>
                    <td colSpan="6">
                        <p>Total de la compra: ${total} </p>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
    
}

export default CartContent;
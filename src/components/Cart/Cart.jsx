import React, { useContext } from "react";
import { useCartContext } from "../../pages/routing/context/cartContext";
import styles from './style/index.module.css'

const CartContent = () => {
    const { cart, removeItem } = useCartContext();
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
                        <td>{cartItem.item.price}</td>
                        <td>
                            <button onClick={() => removeItem(cartItem.item.id)}>Remover</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="5">
                        <button>Finalizar compra</button>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
    
}

export default CartContent;
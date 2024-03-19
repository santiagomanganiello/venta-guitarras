import React from 'react';
import styles from './style/itemdetail.module.css';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../pages/routing/context/cartContext'; 

const ItemDetail = ({ item }) => {
    const { id, title, price, description, image } = item
    const { addItem } = useCartContext()
    const onAdd = (count) => {
    alert(`agregaste ${count} ${title} al carrito`)
    addItem(item, count)
}
    return( 
        <div className={styles.item}>
            <div className={styles.item__image}>
                <a href={image} target="_blank"><img src={image} alt={title} /></a>
            </div>
            <div className={styles.item__info}>
                <h1 className={styles.item__name}>{title}</h1>
                <h3 className={styles.item__price}>price: ${price}</h3>
                <p className={styles.item__price}>{description}</p>
            </div>
            <ItemCount onAdd={onAdd} />
        </div>
        )
};

export default ItemDetail

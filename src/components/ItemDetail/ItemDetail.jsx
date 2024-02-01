import React from 'react';
import styles from './style/itemdetail.module.css';

const ItemDetail = ({ item }) => {
    const { title, price, description, image } = item

    return( 
        <div className={styles.item}>
            <div className={styles.item__image}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.item__info}>
                <h1 className={styles.item__name}>{title}</h1>
                <h3 className={styles.item__price}>price: ${price}</h3>
                <p className={styles.item__price}>{description}</p>
                <button className={styles.button}>Add to cart</button>
            </div>
        </div>
        )
};

export default ItemDetail

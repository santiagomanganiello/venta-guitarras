import React from 'react';
import styles from "./style/item.module.css";
import PropTypes from "prop-types";

const Item = ({ id, name, price, stock, image }) => {
    return( 
    <div className={styles.item}>
        <div className={styles.item__image}>
            <img src={image} alt={name} />
        </div>
        <div className={styles.item__info}>
            <h2 className={styles.item__name}>{name}</h2>
            <p className={styles.item__price}>${price}</p>
            <p className={styles.item__stock}>stock: {stock}</p>
        </div>
    </div>
    );
};

Item.propTypes = {};

export default Item

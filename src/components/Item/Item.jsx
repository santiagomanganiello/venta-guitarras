import React from 'react';
import { Link } from 'react-router-dom';
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
        </div>
        <div>
            <Link to={`/products/${id}`}><div><button>Ver Mas</button></div></Link>
        </div>
    </div>
    );
};

Item.propTypes = {};

export default Item

import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./style/item.module.css";
import PropTypes from "prop-types";

const Item = ({ id, title, price, description, image }) => {
    return( 
    <div className={styles.item}>
        <div className={styles.item__image}>
            <img src={image} alt={title} />
        </div>
        <div className={styles.item__info}>
            <h3 className={styles.item__name}>{title}</h3>
            <h5 className={styles.item__price}>${price}</h5>
        </div>
        <div className={styles.buton}>
            <Link to={`/product/${id}`}><button className={styles.button}>Ver Mas</button></Link>
        </div>
    </div>
    );
};

Item.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    };
export default Item

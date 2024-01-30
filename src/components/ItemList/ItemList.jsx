
import PropTypes from "prop-types";
import React from 'react';
import Item from "../Item/Item";
import styles from "./style/ItemList.module.css";

const ItemList = ({ ItemList }) => {
    return (
        <div className={styles.ItemList}> 
            {ItemList.map(
                ({ id, name, price, stock, image }, index)=> {
                    return ( 
                        <Item
                            key={id}
                            id={id}
                            name={name}
                            price={price}
                            stock={stock}
                            image={image}
                        />
                    );
                }
            )}
        </div>
    );
};

ItemList.propTypes = {};

export default ItemList

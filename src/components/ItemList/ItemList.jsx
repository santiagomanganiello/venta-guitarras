import PropTypes from "prop-types";
import React from 'react';
import Item from "../Item/Item";
import styles from "./style/ItemList.module.css";

const ItemList = ({ ItemList }) => {
    return (
        <div className={styles.ItemList}> 
            {ItemList.map(
                ({ id, title, price, description, image }, index)=> {
                    return ( 
                        <Item
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            description={description}
                            image={image}
                        />
                    );
                }
            )}
        </div>
    );
};

ItemList.propTypes = {
    itemList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            price: PropTypes.number,
            pictureUrl: PropTypes.string,
        })
    ),
};

export default ItemList

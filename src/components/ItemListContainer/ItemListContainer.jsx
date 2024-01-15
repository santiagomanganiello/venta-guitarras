import React, {useState, useEffect} from "react";
import styles from "./container.module.css";
import { products } from "../../utils/MockData";
import ItemList from "../ItemList/ItemList";

    const ItemListContainer = ({}) => {
        const [items, setItems] = useState ([]);
        useEffect(() => {
            setItems(products);
        }, []);

        /**RETORNO*/
        return  <ItemList ItemList={items} />;
    };

export default ItemListContainer;
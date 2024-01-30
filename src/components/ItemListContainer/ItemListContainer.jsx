import React, {useState, useEffect} from "react";
import styles from "./container.module.css";
import { getProducts, getProductsAsync } from "../../utils/MockData";
import ItemList from "../ItemList/ItemList";

    const ItemListContainer = ({}) => {
        const [items, setItems] = useState ([]);

        useEffect(() => {
           console.log('antes de la promesa')
            getProductsAsync().then((products) => {
            setItems(products)
            console.log(products)
        }); 
        }, [])
        /**RETORNO*/
        return  <ItemList ItemList={items} />;
        }
        export default ItemListContainer; 
    
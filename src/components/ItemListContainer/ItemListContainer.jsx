import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import styles from "./container.module.css";
import { getProducts, getProductsAsync } from "../../utils/MockData";
import ItemList from "../ItemList/ItemList";

    const ItemListContainer = ({}) => {
    const [items, setItems] = useState ([]);
    const { categoryId } = useParams();

        useEffect(() => {
            getProductsAsync().then((products) => {
                /**filtro de products por la misma category id */
                if (categoryId) {
                    const filteredProducts = products.filter(
                    (product) => product.category === categoryId
                    )
                    setItems(filteredProducts)
                } else {
                    setItems(products)
                } 
        }); 
        }, [categoryId])
        /**RETORNO*/
        return  <ItemList ItemList={items} />;
        }
        export default ItemListContainer; 
    
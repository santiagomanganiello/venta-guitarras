import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import styles from "./container.module.css";
//import { getProducts, getProductsAsync } from "../../utils/MockData";
import ItemList from "../ItemList/ItemList";
import { db } from "../../firebase/config";
import { collection, query, where, getDocs, doc } from "firebase/firestore";

    const ItemListContainer = ({}) => {
    const [items, setItems] = useState ([]);
    const { categoryId } = useParams();

        useEffect(() => {
            const productsColection = collection(db, 'products')

            if(categoryId){
                const queryCollection = query(productsColection, where('categoria' , '==' , categoryId))

                getDocs(queryCollection).then(({ docs }) => {
                    const products = docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }))
                    setItems(products)
                })
    
            }   else{
                    getDocs(productsColection).then(({ docs }) => {
                        console.log('docs not filtered')
                        const products = docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                        setItems(products)
                    })
            }






        //    getProductsAsync().then((products) => {
        //        /**filtro de products por la misma category id */
        //        if (categoryId) {
        //            const filteredProducts = products.filter(
        //            (product) => product.category === categoryId
        //            )
        //            setItems(filteredProducts)
        //        } else {
        //            setItems(products)
        //        } 
        //}); 
        }, [categoryId])
        /**RETORNO*/
        return  <ItemList ItemList={items} />;
        }
        export default ItemListContainer; 
    
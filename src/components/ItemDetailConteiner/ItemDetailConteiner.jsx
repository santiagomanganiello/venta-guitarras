import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductAsyncById } from '../../utils/MockData';
import styles from './style/detail.module.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';


const ItemDetailConteiner = () => {
    const [item, setItem] = useState()
    const { productId } = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            const productsCollection = collection(db, 'products');
            const refDoc = doc(productsCollection, productId);
            const docSnap = await getDoc(refDoc);
            if (docSnap.exists()) {
                // si el documento existe, configuramos el estado del item con sus datos y su ID
                setItem({ id: docSnap.id, ...docSnap.data() });
            } else {
                console.log("No se encontró el producto con el ID especificado.");
            }
        };

        fetchProduct();
    }, [productId]); 
        
    if (item === undefined) {
        return <Spinner />
    } else {
        return <ItemDetail item={item}/>
    }
    
} 


export default ItemDetailConteiner

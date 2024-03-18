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
        const productsCollection = collection(db, 'products')
        const refDoc = doc(productsCollection, productId)
        getDoc(refDoc).then((doc) => {
            setItem ({...doc.data() })
        })
        //getProductAsyncById(productId).then((product) => {
        //    setItem(product)
       // })
        }, [productId])
        
    if (item === undefined) {
        return <Spinner />
    } else {
        return <ItemDetail item={item} />
    }
    
} 


export default ItemDetailConteiner

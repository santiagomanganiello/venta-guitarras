import { React , useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductAsyncById } from '../../utils/MockData';
import styles from './style/detail.module.css';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailConteiner = () => {
    const {item, setItem} = useState()
    const { productId } = useParams()

    useEffect(() => {
        getProductAsyncById(productId).then((product) => {
            setItem(product)
            console.log(product)
        })
    }, [productId])

    return 
    <div>aaaa</div>

}

export default ItemDetailConteiner

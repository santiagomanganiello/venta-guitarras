import { useState } from 'react';
import styles from './style/itemcount.module.css';
const ItemCount = ({ onAdd }) => {
    const [count, setCount] = useState(1)

    const onClickHandler = ()  => {
        console.log(count)
    }

    const onChangeHandler = (event) => {
        setCount(Number(event.target.value))
    }
    return (
    <div className={styles.box}> 
        <div className={styles.inputs}>
            <input type="button" value='-' onClick={() => (count > 1 ? setCount(count - 1) : setCount(1))} />
            <input type="number" className={styles.number} value={count} onChange={onChangeHandler} />
            <input type="button" value='+' onClick={() => (count < 99 && setCount(count + 1))} />
        </div>
            <input 
                className={styles.comprar}
                type="button" 
                value='Agregar al carrito'  
                onClick={() => onAdd(count)}/>   
    </div>
)};

export default ItemCount

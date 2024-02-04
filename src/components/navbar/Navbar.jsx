import carrito from "../../assets/img/carrito.png";
import Logo from "../../assets/img/logo.png";
import styles from './index.module.css';
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCategoriesAsync } from '../../utils/MockData'

const Navbar = () => {
  const [categories, setCategories] = useState([])

    useEffect(() => {
      getCategoriesAsync().then((categories) => {
        setCategories(categories)
      })
    }, [])

    return (
      <>
        <div className={styles.container}>
        <Link to='/'><img src={Logo} className={styles.guitarra}></img></Link>
        <div className={styles.nav_list}>
        <Link to='/products' className={styles.nav_link}>All products</Link>
        {categories.map((category, index) => (
          <NavLink
            to={`/products/${category}`}
            key={index}
            className={styles.nav_link}
          >
          {category}
          </NavLink>
        ))}   
        </div>
        <div><img src={carrito} className={styles.carrito}></img></div>
      </div>
    </>  
  )
}

export default Navbar
import styles from "./App.module.css"; 
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App(){
    const[cartItems,setCartItems] = useState([]);

    return( 

        <div className={styles.mainContainer}>
            <div className={styles.logo}>eBay!</div>
            <div className={styles.navbar}>
                <Link to = "/" className={styles.link}>Home</Link>
                <Link to = "shop/" className={styles.link}>Shop</Link>
                <Link to = "contact/" className={styles.link}>Contact</Link>
                <Link to = "cart/" className={styles.cart} >🛒</Link>
                <div className={styles.cartcount}>{cartItems.length}</div>
            </div>
            <Outlet context={[cartItems,setCartItems]}/>
            <footer className={styles.footer}>Est. 1859</footer>
        
        
        
        </div>
    )

}


export default App;
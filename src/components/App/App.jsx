import styles from "./App.module.css"; 
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App(){

    return( 

        <div className={styles.mainContainer}>
        <div className={styles.logo}>eBay!</div>
        <div className={styles.navbar}>
            
            <Link to = "/" className={styles.link}>Home</Link>
            <Link to = "shop/" className={styles.link}>Shop</Link>
            <Link to = "contact/" className={styles.link}>Contact</Link>
            <Link to = "cart/" className={styles.cart} >Cart

            
            </Link>
        </div>
        <Outlet/>
        <footer className={styles.footer}>Est. 1859</footer>
        
        
        
        </div>
    )

}


export default App;
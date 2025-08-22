import styles from "./Errorpage.module.css"; 
import { Link } from "react-router-dom";

function Errorpage(){
    return(

        <div className={styles.errorcontainer}>
        <div className={styles.err}>Oops! This page doesn't seem to exist 🙁</div>
        <Link to='/' className={styles.link}>Click here to go back.</Link>
        </div>
    )

}

export default Errorpage;
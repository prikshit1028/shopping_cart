import styles from "./Homepage.module.css"; 
import { Link } from "react-router-dom";

function Homepage(){
    return(
        <div className={styles.container}>
        <div>information about this awesome brand/website</div>
        <div>some photos + more info</div>
        
        </div>
    )

}

export default Homepage;
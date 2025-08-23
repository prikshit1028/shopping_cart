import styles from "./Homepage.module.css"; 
import { Link } from "react-router-dom";
import cartier from "../../assets/cartier.png";


function Homepage(){
    return(
        <div className={styles.container}>
        <div className={styles.homeInfo}>Explore a range of exciting jewellery curated by the world's best experts for you.</div>
        <img src={cartier} alt="photo of a man wearing jewellery" className={styles.image}/>
        
        </div>
    )

}

export default Homepage;
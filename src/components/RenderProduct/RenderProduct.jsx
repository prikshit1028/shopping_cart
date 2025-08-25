import PropTypes from 'prop-types';
import { useState } from "react";
import styles from "./RenderProduct.module.css"; 





function RenderProduct({productobj, cartCountUpdater,cartCountVal}){
    const[itemCount,setItemCount] = useState(1);

    return(
        <div className={styles.productStyle}>
            <img src={productobj.image} className={styles.imageStyle}/>
            <div>{productobj.title} - ${productobj.price}</div>
            <input type='number' min='1' className={styles.inputStyle} value={itemCount} onChange={function(newvalue){
                let items = +(newvalue.target.value);if(items == 0){setItemCount(1)} else{setItemCount(items)}}}></input>
            <button onClick={function(){
                let exit = cartCountVal.every(function(ele){return (productobj.title !== ele.name)});
                if(exit==false){return}
                cartCountUpdater(function(current){
                return [...current,{name:productobj.title,count:itemCount}]})}} className={styles.addStyle}>Add +</button>
        </div>




    )
}

RenderProduct.propTypes = {
    productobj: PropTypes.object,
    cartCountUpdater: PropTypes.func,
    cartCountVal: PropTypes.array,
}

export default RenderProduct;
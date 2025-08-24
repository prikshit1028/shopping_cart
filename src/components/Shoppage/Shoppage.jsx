import styles from "./Shoppage.module.css"; 
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import PropTypes from 'prop-types';


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

function useData(){
    const[data,setData] = useState(null);
    const[err,setErr] = useState(null);
    const[loading,setLoading] = useState(true);

    useEffect(function(){
        const controller = new AbortController();

        fetch('https://fakestoreapi.com/products',{signal: controller.signal})
            .then(function(response) {
            return response.json();
            })
            .then(function(data) {
             console.log(data);
             setData(data);
             setLoading(false);
            })
            .catch(function(errorr){
                if(errorr.name !== "AbortError"){
                setErr(errorr);
                setLoading(false);
                }
            });

            return function(){
                controller.abort()
            }
    },[])




    return {data,err,loading};

}

function Shoppage(){
    const[currentVal,update] = useOutletContext();
    const{data,err,loading} = useData();
    if(loading){return (<div className={styles.loadingStyle}>Loading...</div>)};
    if(err){return (<div>
        <div className={styles.errorIcon}>💀</div>
        <div className={styles.errorStyle}>error: {err.message} </div>
    </div>)}
    if(data){
        
        return (
            <>
            <div className={styles.shopHeading}>Bestsellers!</div>
            <div className={styles.productContainer}>
                {data.map(function(product){
                    return ( <RenderProduct productobj={product} cartCountUpdater={update} cartCountVal = {currentVal} />)
                })}

            </div>

            </>







        )
        }

    

}

export default Shoppage;
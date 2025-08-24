import styles from "./Shoppage.module.css"; 
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useOutletContext } from "react-router-dom";

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
    let update = useOutletContext();
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
                    return ( 
                    <div className={styles.productStyle}>
                        <img src={product.image} className={styles.imageStyle}/>
                        <div>{product.title} - ${product.price}</div>
                        <button onClick={function(){}} className={styles.buttonStyle}>Add +</button>
                    </div>)
                })}

            </div>

            </>







        )
        }

    

}

export default Shoppage;
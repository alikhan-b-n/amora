import React from "react-dom/client";
import classes from "../styles/product.module.css";

export function Product(props){


    return(
        <div className={classes.Container}>
            <div className={classes.image}>
                <img src={process.env.PUBLIC_URL + `/images_of_product/` + props.obj.image_url+`.jpg`} alt="product"/>
            </div>
            <div className={classes.info}>
                <div className={classes.info_naming}>
                    <h3>{props.obj.diffuser_name}</h3>
                </div>
                <div className={classes.info_buying}>
                    <h2>{props.obj.price}</h2>
                    <a href={props.obj.url}>
                        <button className={classes.btn}>
                            Купить
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}


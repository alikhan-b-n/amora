import {Product} from "./Product";
import classes from "../styles/ProductTable.module.css";
export function ProductsTable({data}) {

    return(

        <div className={classes.container}>
            <div className={classes.flex}>
                <div className={classes.line}></div>
                <h1 className={classes.name}>Каталог</h1>
                <div className={`${classes.line} ${classes.right}`}></div>
            </div>
            <div className={classes.circle}></div>
            <div className={classes.table}>
                {data.map((item)=>(
                    <Product
                        obj={item}
                        key={item.key}
                    />
                ))}
            </div>
        </div>
    )
}
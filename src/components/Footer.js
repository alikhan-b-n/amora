import classes from "../styles/footer.module.css";

export function Footer(){
    return(
        <div className={classes.footer_background}>
            <div className={classes.footer_content}>
                <img className={classes.img} src={process.env.PUBLIC_URL + '/Logo.svg'} alt="Logo" />
                <div className={classes.btn_container}>
                    <a href="https://www.wildberries.ru/brands/310594657-AMORA%20SHOP">
                        <button className={classes.btn}>
                            WB
                        </button>
                    </a>
                </div>
            </div>
            <div className={classes.circle}></div>
        </div>
    )
}
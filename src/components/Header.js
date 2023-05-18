import styles from "../styles/header.module.css";
export function Header() {
    return (
        <div className={styles.centralize}>
            <div className={styles.circle}></div>
            <img className={styles.logo} src={process.env.PUBLIC_URL + '/Logo.svg'} alt="Logo" />
            <div className={styles.container}>
                <div className={styles.flex_container}>
                    <div className={styles.img_container}>
                        <img className={styles.img} src={process.env.PUBLIC_URL + '/header_image.svg'} alt=""/>
                    </div>
                    <div className={styles.info}>
                        <h1>Духи - это искуство, которое заставляет память говорить</h1>
                        <p>Discover the perfect scent to complement your style and personality. Our vast selection of fragrances from top brands ensures that you will find scent to suit unique taste.</p>
                        <a href="https://www.wildberries.ru/brands/310594657-AMORA%20SHOP">
                            <button className={styles.btn}>
                                Buy now
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
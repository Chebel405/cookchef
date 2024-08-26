import styles from "./Header.module.scss";
import cookchef from "../assets/images/cook-chef-logo.jpg";

function Header() {
    return (
        <header className={`${styles.header} d-flex flex-row align-items-center`}>

            <div className="flex-fill">
                <img src={cookchef} alt="logo cookchef" />
            </div>
            <ul className={styles.headerList}>
                <button className="mr-5 btn btn-reverse-primary">
                    <i className="fa-solid fa-heart mr-5"></i>
                    <span>Wishlist</span>
                </button>
                <button className="btn btn-primary">connexion</button>
            </ul>
            <i className={`fa-solid fa-bars ${styles.headerXs}`}></i>
        </header>
    );
}

export default Header;
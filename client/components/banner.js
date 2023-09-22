import styles from "./banner.module.css"

const Banner = () => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img src="./favicon.ico" alt="logo" 
                className={styles.logo}/>
            </div>
            <div className="col-7 mt-5">
                Providing Pizzas for the masses since 2023!
            </div>
        </header>
    );
};

export default Banner;
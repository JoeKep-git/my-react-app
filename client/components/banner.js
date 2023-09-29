import { useContext } from "react";
import styles from "./banner.module.css";
import navValues from "@/helpers/navValues";
import { navigationContext } from "./app";
import NavBar from "@/navigation/nav";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//convention here is to call it props
//props is an object that contains all the properties that are passed to the component
//props are read-only
//props are passed from parent to child
//props are immutable
//i can also get children from props {children}

const Banner = ({children}) => {
    const {navigate} = useContext(navigationContext);
    console.log(navigate)
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img src="./favicon.ico" alt="logo" 
                className={styles.logo}
                onClick={() => navigate(navValues.pizza)}
                />
            </div>
            
            <ul className="nav justify-content-end col-7 mt-5">
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => navigate(navValues.pizza)}>Pizzas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => navigate(navValues.sides)}>Sides</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => navigate(navValues.drinks)}>Beverages</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => navigate(navValues.cart)}>Cart</a>
                </li>
            </ul>
            
            <div className="col-7 mt-5">
                {children}
            </div>
        </header>
    );
};

export default Banner;
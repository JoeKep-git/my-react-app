import currencyFormatter from "@/helpers/currencyFormatter";
import defaultPhoto from "@/assets/images/defaultPizzaPhoto.jpg";
import { useContext } from "react";
import { navigationContext } from "./app";
//display the pizza
const Pizza = () => {
    const {param: pizza} = useContext(navigationContext);
    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <img className="img-fluid"
                    src={pizza.photo || defaultPhoto} alt="pizza" />
                </div>
            </div>
            <div className="col-6">
                <div className="row mt-2">
                    <h5 className="col-12">{pizza.name}</h5>
                </div>
            </div>
        </div>
    ) 
}
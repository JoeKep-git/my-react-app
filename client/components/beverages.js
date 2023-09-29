//Beverages.js
import loadingStatus from "@/helpers/loadingStatus";
import LoadingIndicator from "./loadingIndicator";
import useBeverages from "@/hooks/useBeverages";
import currencyFormatter from "@/helpers/currencyFormatter";
import postBeverage from "@/hooks/usePostBeverages";

//display the sides
const BeveragesList = () => {
    const {beverages, setBeverages, loadingState} = useBeverages();

    //conditional rendering
    if(loadingState !== loadingStatus.loaded) {
        return <LoadingIndicator loadingState={loadingState} />;
    }

    const handleAddToCart = async (beverage) => {
        const response = await postBeverage(beverage);
    };

    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {beverages.map((beverage) => (
                    <div key={beverage.id} className="col">
                        <div className="card">
                            <img src={"/images/beverages/"+beverage.pictureName || "http://localhost:8000/api/images/beverage/garlicBread.jpg"} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{beverage.drinkName}</h5>
                                <p className="card-text">{beverage.litre}L</p>
                                <p className="card-text">{currencyFormatter.format(beverage.price)}</p>
                                <br/>
                                <button className="btn btn-primary" onClick={()=> handleAddToCart(beverage)}>Add to Cart</button>
                            </div>
                        </div>
                    </div> 
                ))}
            </div>
        </>
    );
};

export default BeveragesList;
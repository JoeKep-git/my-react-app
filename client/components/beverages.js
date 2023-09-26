//Beverages.js
import loadingStatus from "@/helpers/loadingStatus";
import LoadingIndicator from "./loadingIndicator";
import useBeverages from "@/hooks/useBeverages";
import currencyFormatter from "@/helpers/currencyFormatter";

//display the sides
const BeveragesList = () => {
    const {beverages, setBeverages, loadingState} = useBeverages();

    //conditional rendering
    if(loadingState !== loadingStatus.loaded) {
        return <LoadingIndicator loadingState={loadingState} />;
    }

    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {beverages.map((beverage) => (
                    <div key={beverage.id} className="col">
                        <div className="card">
                            <img src={beverage.imageSrc || "http://localhost:8000/api/images/beverage/garlicBread.jpg"} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{beverage.name}</h5>
                                <p className="card-text">{currencyFormatter.format(beverage.price)}</p>
                            </div>
                        </div>
                    </div> 
                ))}
            </div>
        </>
    );
};

export default BeveragesList;
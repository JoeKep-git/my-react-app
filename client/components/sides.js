//sides.js
import loadingStatus from "@/helpers/loadingStatus";
import LoadingIndicator from "./loadingIndicator";
import useSides from "@/hooks/useSides";
import currencyFormatter from "@/helpers/currencyFormatter";

//display the sides
const SidesList = () => {
    const {sides, setSides, loadingState} = useSides();

    //conditional rendering
    if(loadingState !== loadingStatus.loaded) {
        return <LoadingIndicator loadingState={loadingState} />;
    }

    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {sides.map((side) => (
                    <div key={side.id} className="col">
                        <div className="card">
                            <img src={side.imageSrc || "http://localhost:8000/api/images/sides/garlicBread.jpg"} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{side.name}</h5>
                                <p className="card-text">{currencyFormatter.format(side.price)}</p>
                            </div>
                        </div>
                    </div> 
                ))}
            </div>
        </>
    );
};

export default SidesList;
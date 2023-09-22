import Banner from "./banner";
import PizzaList from "./pizzaList";

//this has children in the <Banner> tag
const App = () => {

    return (
        <Banner>
            <div>
                Providing houses all over the world
            </div>
        <PizzaList />
        </Banner>
    );
};

export default App;
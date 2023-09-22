import Banner from "./banner";
import CardPizzaList from "./pizzaCardList";

//this has children in the <Banner> tag
const AppPizza = () => {

    return (
        <Banner>
            <div>
                Providing pizzas all over the world
            </div>
        <CardPizzaList />
        </Banner>
    );
};

export default AppPizza;
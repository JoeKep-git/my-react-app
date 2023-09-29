//usePostBeverages.js

const postBeverage = async (beverage) => {
    try {
    await fetch("/api/beverage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Application": "application/json",
        },
        body: JSON.stringify(beverage),});
    } catch (err) {
        console.log(err);
    }
};

export default postBeverage;
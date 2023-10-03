//usePostPizza.js

const postPizza = async (pizza, size, crust) => {
    try {
    await fetch("/api/pizzas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Application": "application/json",
        },
        body: JSON.stringify({
            ...pizza,
            size: size,
            crust: crust,}),});
    } catch (err) {
        console.log(err);
    }
};

export default postPizza;
//usePostSides.js

const postSide = async (side) => {
    try {
    await fetch("/api/sides", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Application": "application/json",
        },
        body: JSON.stringify(side),});
    } catch (err) {
        console.log(err);
    }
};

export default postSide;
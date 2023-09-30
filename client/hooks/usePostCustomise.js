//usePostCustomise.js

const postCusomise = async (customise) => {
    try {
    await fetch("/api/customise", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Application": "application/json",
        },
        body: JSON.stringify(customise),});
    } catch (err) {
        console.log(err);
    }
};

export default postCusomise;
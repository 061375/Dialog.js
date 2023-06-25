async function get(url, callback) {
    try {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "text/html",
            }
        });

        const result = await response.text();
        console.log("Success:", result);
        callback(result)
    } catch (error) {
        console.error("Error:", error);
    }
}
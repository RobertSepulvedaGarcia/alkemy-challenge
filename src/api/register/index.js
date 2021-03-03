const api = "http://localhost:5000";

export const newRegister = async(data) => {
    try {
        console.log(data);
        const url = `${api}/new/operation`;

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            // mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        });

        return await response.json();
    } catch (error) {
        return error;
    }
};
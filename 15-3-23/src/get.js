const url = "https://dummyjson.com/products"

export const GET = async (endpoint = "") => {
    const res = await fetch(`${url}${endpoint}`)
    const data = res.json();

    return data
};
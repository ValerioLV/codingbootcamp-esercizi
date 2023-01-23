export const quoteCreate = async () => {
    const res = await fetch("https://dummyjson.com/quotes");
    const data = await res.json();
    return data;
}
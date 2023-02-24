const API_KEY = "2a3cf2a5728d35add3022c8b6a883b8a";
const BASE_URL = "https://api.themoviedb.org/3/";

const GET = async (type, resource) => {
  const res = await fetch(`${BASE_URL}${type}/${resource}?api_key=${API_KEY}`);
  const media = await res.json();
  return media;
};

const GET_Genre = async (type) => {
    const res = await fetch(`${BASE_URL}genre/${type}/list?api_key=${API_KEY}`);
    const data = await res.json();
    return data
}

export { GET, GET_Genre };
const API_KEY = "2a3cf2a5728d35add3022c8b6a883b8a";
const BASE_URL = "https://api.themoviedb.org/3/";

const GET = async (type = "tv", resource = "100088") => {
  const res = await fetch(`${BASE_URL}${type}/${resource}?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
};

export { GET };
import axios from "axios";

const baseUrl = "https://youtube-v31.p.rapidapi.com";

export const fetchData = async (url: string): Promise<any> => {
  const options = {
    params: {
      maxResults: "50",
    },
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  const { data } = await axios.get(`${baseUrl}/${url}`, options);
  return data;
};

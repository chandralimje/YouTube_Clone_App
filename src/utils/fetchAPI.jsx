import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

//   try {
//       const response = await axios.request(options);
//       console.log(response.data);
//   } catch (error) {
//       console.error(error);
//   }

export const fetchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

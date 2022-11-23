const { VITE_CONGESTION_URL, VITE_API_KEY, VITE_PLACE_URL } = import.meta.env;
import axios, { AxiosResponse } from "axios";
const options = {
  headers: {
    accept: "application/json",
    appkey: VITE_API_KEY,
  },
};
export const requestPlace = async () => {
  try {
    const result = await axios.get(VITE_PLACE_URL);
    return result;
  } catch (e: any) {
    console.log(e);
  }
};

export const requestCongestion = async () => {
  try {
    const result = await axios.get(VITE_PLACE_URL, options);
    return result;
  } catch (e: any) {
    console.log(e);
  }
};

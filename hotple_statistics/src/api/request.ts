const { VITE_CONGESTION_URL, VITE_API_KEY, VITE_PLACE_URL } = import.meta.env;
import axios from "axios";
const options = {
  headers: {
    accept: "application/json",
    appkey: VITE_API_KEY,
  },
};

const requestMap = {
  CONGESTION: VITE_CONGESTION_URL,
  PLACE: VITE_PLACE_URL,
};
type RequestType = "CONGESTION" | "PLACE";
export const request = async (requestType: RequestType, placeId?: string) => {
  try {
    const result = await axios.get(
      typeof placeId === "undefined"
        ? `${requestMap[requestType]}`
        : `${requestMap[requestType]}${placeId}`,
      options
    );
    return result;
  } catch (e: any) {
    console.log(e);
  }
};

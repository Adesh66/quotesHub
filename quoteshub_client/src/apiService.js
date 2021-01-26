import axios from "axios";

export const fetchQuotesList = async () => {
  try {
    const { data } = await axios.get("/quotes");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

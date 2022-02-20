import axios from "axios";

import { getSearchURL } from "./URLS";

const search = async (term: string) => {
  try {
    const data = await axios.get(getSearchURL(term));

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export { search };

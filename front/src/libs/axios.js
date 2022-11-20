import Axios from "axios";
import { BASE_URL } from "../config";

export const axios = Axios.create({
  baseURL: BASE_URL,
});

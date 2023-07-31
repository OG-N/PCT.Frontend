import { apiRoutes } from "../apiRoutes";
import axios from "axios";

export const getToken = async () => {
    return await axios.get(`${apiRoutes.token}`);
};

export const getFamilies = async () => {
    return await axios.get(`${apiRoutes.productcatalog}/api/rest/v1/families?limit=100`);
};

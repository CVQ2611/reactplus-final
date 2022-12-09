import { axiosCreate } from "./axios";

export const getData = async () => {
    const response = await axiosCreate.get('tasks');
    return response;
}
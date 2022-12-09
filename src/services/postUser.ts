import { UserPost } from "../constants";
import { axiosCreate } from "./axios";

export const createUser = async (newUser: UserPost) => {
    const response = await axiosCreate.post('users', newUser);
    return response;
}
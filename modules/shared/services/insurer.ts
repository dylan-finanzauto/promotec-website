import axios from "axios";
import { BasicResponse } from "../types/generic";
import { Insurer } from "../types/master";

export const insurer = async (): Promise<Insurer[]> => {
    try {
        const response = await axios.get<BasicResponse<Insurer[]>>(`${process.env.NEXT_PUBLIC_API_URL}/insurance`);

        if (response.data.isFailure) {
            throw new Error(response.data.error.description);
        }

        return response.data.value;
    } catch (error) {
        if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
            throw new Error('Request timed out');
        }
        throw error;
    }
};
import axios from "axios";
import { BasicResponse } from "../types/generic";
import { Coverage, Plan } from "../types/coverage";

export const coverage = async (params: Record<string, string>): Promise<Coverage[]> => {
    try {
        const searchParams = (new URLSearchParams(params)).toString();
        const response = await axios.get<BasicResponse<Coverage[]>>(`${process.env.NEXT_PUBLIC_API_URL}/coverage?${searchParams}`);

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

export const plan = async (): Promise<Plan[]> => {
    try {
        const response = await axios.get<BasicResponse<Plan[]>>(`${process.env.NEXT_PUBLIC_API_URL}/coverage/plan`);

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

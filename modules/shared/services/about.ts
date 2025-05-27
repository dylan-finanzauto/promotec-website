import axios from "axios";
import { About, Contact } from "../types/about";
import { BasicResponse } from "../types/generic";

export const about = async (): Promise<About[]> => {
    try {
        const response = await axios.get<BasicResponse<About[]>>(`${process.env.NEXT_PUBLIC_API_URL}/about`);

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

export const contact = async (): Promise<Contact[]> => {
    try {
        const response = await axios.get<BasicResponse<Contact[]>>(`${process.env.NEXT_PUBLIC_API_URL}/about/contact`);

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

import axios from "axios";
import { BasicResponse } from "../types/generic";
import { Carousel, Product } from "../types/product";

export const product = async (): Promise<Product[]> => {
    try {
        const response = await axios.get<BasicResponse<Product[]>>(`${process.env.NEXT_PUBLIC_API_URL}/product`);

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

export const carousel = async (): Promise<Carousel[]> => {
    try {
        const response = await axios.get<BasicResponse<Carousel[]>>(`${process.env.NEXT_PUBLIC_API_URL}/product/carousel`);

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

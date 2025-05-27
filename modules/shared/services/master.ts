import axios from "axios";
import { BasicResponse } from "../types/generic";
import { Insurer, Master } from "../types/master";

export const insurer = async (): Promise<Insurer[]> => {
  try {
    const response = await axios.get<BasicResponse<Insurer[]>>(`${process.env.NEXT_PUBLIC_API_URL}/master/insurer`);

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

export const typeDocument = async (): Promise<Master[]> => {
  try {
    const response = await axios.get<Master[]>(`${process.env.NEXT_PUBLIC_API_URL}/master/type-document`);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
      throw new Error('Request timed out');
    }
    throw error;
  }
};

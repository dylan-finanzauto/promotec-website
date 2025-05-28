import axios from "axios";
import { Master } from "../types/master";
import { BasicResponse } from "../types/generic";

export const typeDocument = async (): Promise<Master[]> => {
  try {
    const response = await axios.get<BasicResponse<Master[]>>(`${process.env.NEXT_PUBLIC_API_URL}/master/type-document`);

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

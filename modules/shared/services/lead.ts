import axios from "axios";
import { BasicResponse } from "../types/generic";
import { PostLead } from "../types/lead";

export const product = async (data: PostLead): Promise<PostLead> => {
  try {
    const response = await axios.post<BasicResponse<PostLead>>(`${process.env.NEXT_PUBLIC_LANDING_API_URL}/lead/addlead`, data);

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

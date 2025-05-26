import axios from "axios";
import { Master } from "../types/master";

export const typeDocuments = async (): Promise<Master[]> => {
  try {
    const response = await axios.get<Master[]>('https://my-json-server.typicode.com/readans/db-json-api/posts');

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
      throw new Error('Request timed out');
    }
    throw error;
  }
};

export const typeProducts = async (): Promise<Master[]> => {
  try {
    const response = await axios.get<Master[]>('https://my-json-server.typicode.com/readans/db-json-api/comments');

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
      throw new Error('Request timed out');
    }
    throw error;
  }
};

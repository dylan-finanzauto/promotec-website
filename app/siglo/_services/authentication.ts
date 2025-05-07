import axios from 'axios';
import { LoginRequest, LoginResponse, RefreshRequest, RefreshResponse, RegisterRequest } from '../_types/api/Authentication';
import { BasicResponse } from '../_types/api/Base';

const login = async (body: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/authentication/login`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
      throw new Error('Request timed out');
    }
    throw error;
  }
};

const refresh = async (body: RefreshRequest): Promise<RefreshResponse> => {
  try {
    const response = await axios.post<RefreshResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/authentication/refresh`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

    return response.data;
  } catch (error) {
    console.log(error)
    if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
      throw new Error('Request timed out');
    }
    throw error;
  }
};

const register = async (body: RegisterRequest): Promise<BasicResponse<any>> => {
  try {
    const response = await axios.post<any>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/authentication/register`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

    return response.data;
  } catch (error) {
    console.log(error)
    if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
      throw new Error('Request timed out');
    }
    throw error;
  }
};

export { login, refresh, register };

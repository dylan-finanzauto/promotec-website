/**
 * * @description Basic request structure for API requests.
 */
export interface LoginRequest {
  username: string;
  password: string;
}

export interface RefreshRequest {
  accessToken: string;
  refreshToken: string;
}

export interface RegisterRequest {
  names: string;
  lastNames: string;
  password: string;
  userName: string;
  email: string;
  roleId: string;
}

/**
 * * @description Basic response structure for API responses.
 */
export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  roles: RoleResponse[];
}

export interface RoleResponse {
  descripcion: string;
}

export interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  expirationDate: string;
  roles: RoleResponse[]
}

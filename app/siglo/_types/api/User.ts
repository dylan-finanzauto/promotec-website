export interface UpdateUserRequest {
  userId: string;
  roleId: string;
  email: string;
  name: string;
  lastName: string;
}

export interface CreateUserRequest {
  names: string;
  lastNames: string;
  userName: string;
  email: string;
  roleId: string;
}

export interface CurrentUserResponse {
  id: string;
  name: string;
  lastName: string;
  userName: string;
  email: string;
  lastConnecction: string;
  modifyBy: string;
  roles: RoleResponse[];
}

export interface RoleResponse {
  roleId: string;
  roleName: string;
  moduleResponses: ModuleResponse[];
}

interface ModuleResponse {
  moduleId: number;
  moduleName: string;
  permissionsResponses: PermissionsResponse[];
}

interface PermissionsResponse {
  permissionId: number;
  permissionName: string;
  state: boolean;
}

export interface UserResponse {
  id: string;
  name: string;
  lastName: string;
  userName: string;
  email: string;
  lastConnecction: string;
  modifyBy: string;
  roles: Role[];
}

interface Role {
  descripcion: string;
}

export interface User {
  id: string;
  name: string;
  lastName: string;
  userName: string;
  email: string;
  lastConnecction: string;
  modifyBy: string;
  roles: Role[];
}

export interface Role {
  roleId: string;
  roleName: string;
  moduleResponses: ModuleResponse[];
}

export interface ModuleResponse {
  moduleId: number;
  moduleName: string;
  permissionsResponses: PermissionsResponse[];
}

export interface PermissionsResponse {
  permissionId: number;
  permissionName: string;
  state: boolean;
}

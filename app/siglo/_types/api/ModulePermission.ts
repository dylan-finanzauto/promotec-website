/**
 * Requests
 */

export interface CreateRoleRequest {
  roleName: string;
  roleModules: RoleModule[];
}

export interface RoleModule {
  moduleId: number;
  permissionsId: number[];
}

export interface UpdatePermissionRequest {
  roleId: string;
  modulePermission: ModulePermissionRequest[];
}

export interface ModulePermissionRequest {
  moduleId: number;
  permissionIds: number[];
}

/**
 * Responses
 */
export interface RoleResponse {
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

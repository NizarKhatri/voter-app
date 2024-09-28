import { Permission } from "./permission";

export interface UserPermissions {
    userId: number;
    userName: string;
    permissions: Permission[];
}
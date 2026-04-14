import { Role } from "../models/user.model";

export interface JwtPayloadData {
    id: string;
    role: Role;
}

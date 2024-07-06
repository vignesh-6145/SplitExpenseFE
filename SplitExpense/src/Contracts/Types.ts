import { User } from "./Models/User";

export type GUID = string;
export type DateOnly = string;

export interface Action{
    type:string,
    payload:Object,
    description:string
}

export interface AuthState{
    isSignedIn : boolean,
    token:string
}

export interface CrrUserState{
    loading:boolean,
    user:User|null,
    error:string|null
}

export interface apkState{
    crrUser:CrrUserState,
    auth:AuthState
}

export function dateOnly(dt:Date):DateOnly{
    return `${dt.getFullYear()}-${dt.getMonth()}-${dt.getDay()}` as DateOnly;
}
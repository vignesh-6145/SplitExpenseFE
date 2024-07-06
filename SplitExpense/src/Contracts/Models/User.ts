import { DateOnly, GUID } from "../Types";

export interface User{
    Id:GUID | null,
    userName:string | null,
    Email:string | null,
    dob:DateOnly | null,
    doj:DateOnly | null,
    password:string | null,
    isActive:boolean | null
}
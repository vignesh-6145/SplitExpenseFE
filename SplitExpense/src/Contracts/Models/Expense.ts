import { DateOnly, GUID, dateOnly } from "../Types";

export interface Expense{
    expenseId:GUID|null,
    name:string|null,
    doc:DateOnly|null,
    amount:number|null,
    userId:GUID|null,
    settled:boolean|null
}

export const dummyExpense:Expense[] =[
    // {
    //     id:'1B8BED27-DC3C-422D-B506-4FFBA84AD742',
    //     name:'shawarma',
    //     amount:300,
    //     doc:dateOnly(new Date('2024-07-14')),
    //     userId:'C440F029-8310-4C4E-80A9-AB4106A00B90',
    //     settled:false
    // },
    // {
    //     id:'ac8fd2ac-e2e2-4083-9959-f31142cd87e2',
    //     name:'cream stone',
    //     amount:600,
    //     doc:dateOnly(new Date('2024-07-14')),
    //     userId:'C440F029-8310-4C4E-80A9-AB4106A00B90',
    //     settled:false
    // },
    // {
    //     id:'ac8fd2ac-e2e2-4083-9959-f31142cd87e2',
    //     name:'cream stone',
    //     amount:600,
    //     doc:dateOnly(new Date('2024-07-14')),
    //     userId:'C440F029-8310-4C4E-80A9-AB4106A00B90',
    //     settled:false
    // }
]
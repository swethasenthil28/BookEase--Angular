import { Account } from "./Account";

export class RegisterAccount {
    // public accountId?: number;
    // public name?: string;
    // public balance?: DoubleRange;
    // public clientId?: number;
    // public email?: string;
    // public password?: string;
    constructor( public account?: Account,public name?: string,public clientId?: number, public email?: string, public password?: string)
    {
        
    } 
}


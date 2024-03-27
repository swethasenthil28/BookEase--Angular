export class MeetingRoom {
    // public accountId?: number;
    // public name?: string;
    // public balance?: DoubleRange;
    // public clientId?: number;
    // public email?: string;
    // public password?: string;
    constructor( 
        public id?:number,
        public name?:string,
        public capacity?:number,
        public floorNumber?:number,
        public type?:string,
        public date?:string,
        public costOfRoom?:number,
        public isAvailable?:boolean){ } 
}
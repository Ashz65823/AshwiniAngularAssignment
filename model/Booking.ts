import { room } from "./Room";
import { User } from "./User";


export class Booking
{
    constructor(public id:number=0,public Room:room,public user:User,public purpose:string,public participants:number)
    {
        
    }
}
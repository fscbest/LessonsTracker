interface ICustomer{
  firstName: string;
   dateOfBirth: Date;
   lastName: string;
   notes: string;
   id: number;
   color: string;
   nickname: string;
}


export class Customer implements ICustomer{
  constructor (
    public firstName: string = "",
    public dateOfBirth: Date = new Date("21.10.2001"),
    public lastName: string = "",
    public notes: string = "",
    public id: number = 25,
    public color: string = "",
    public nickname: string = ""
  )
  {}

}

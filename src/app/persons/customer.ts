interface ICustomer {
  userId: number;
  dateOfBirth: Date;
  firstName: string;
  lastName: string;
  notes: string;
  id: number;
  color: string;
  nickname: string;
}
export class Customer implements ICustomer{
  public userId: number;
  public dateOfBirth: Date;
  public firstName: string;
  public lastName: string;
  public notes: string;
  public id: number;
  public color: string;
  public nickname: string;

  constructor ();
  constructor (obj?: ICustomer){
    this.dateOfBirth = obj && obj.dateOfBirth || new Date('02.02.2002');
    this.firstName = obj && obj.firstName || "";
    this.lastName = obj && obj.lastName || "";
    this.notes = obj && obj.notes || "";
    this.color = obj && obj.color || "";
    this.nickname = obj && obj.nickname || "";


  }
}

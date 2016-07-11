export class Provider {
  constructor (
    public userId: number,
    public dateOfBirth: Date,
    public firstName: string,
    public lastName: string,
    public notes: string,
    public id: number,
    public color: string,
    public billingPeriod: number
  )
  {}
}

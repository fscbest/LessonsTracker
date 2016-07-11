export class Task {
  constructor (
    public userId: number,
    public customerId: number,
    public providerId: number,
    public date: Date,
    public title: string,
    public  notes: string,
    public  price: number,
    public  id: number,
    public  color: string
  )
  {}
}

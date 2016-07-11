export class TaskTemplate {
  constructor(
    public title: string,
    public notes: string,
    public price: number,
    public id: number,
    public customerId: number,
    public providerId: number
  )
  {}
}

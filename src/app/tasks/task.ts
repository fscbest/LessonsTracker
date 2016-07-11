export class Task {
  userId: number;
  customerId: number;
  providerId: number;
  date: Date;
  title: string;
  notes: string;
  price: number;
  id: number;
  color: string;
}

export class TaskTemplate {
  title: string;
  notes: string;
  price: number;
  id: number;
  customerId: number;
  providerId: number;
}

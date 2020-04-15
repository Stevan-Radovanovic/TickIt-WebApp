export class Zone {
  constructor(private name: string, private amount: number) {
    this.name = name;
    this.amount = amount;
  }

  getName() {
    return this.name;
  }

  getAmount() {
    return this.amount;
  }
}

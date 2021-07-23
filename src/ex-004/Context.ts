import { IStrategy } from "./contracts/IStrategy";


class Context {
  private strategy: IStrategy;

  constructor(strategy: IStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: IStrategy) {
    this.strategy = strategy;
  }

  orderList(): string {
    const list =["b", "e", "a", "d", "f"]
    console.log('list',list);
    
    const result = this.strategy.orderList(list);

    return `${result.join(",")} ${this.strategy.constructor.name}`;
  }
}

export { Context };

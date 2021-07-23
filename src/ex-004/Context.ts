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
    const result = this.strategy.orderList(["b", "e", "a", "d", "f"]);

    return `${result.join(",")} ${this.strategy.constructor.name}`;
  }
}

export { Context };

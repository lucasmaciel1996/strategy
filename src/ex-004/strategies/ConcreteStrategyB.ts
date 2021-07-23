import { IStrategy } from "../contracts/IStrategy";

class ConcreteStrategyB implements IStrategy {
  orderList(data: string[]): string[] {
    return data.reverse();
  }
}

export { ConcreteStrategyB };

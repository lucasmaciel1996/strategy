import { IStrategy } from "../contracts/IStrategy";


class ConcreteStrategyA implements IStrategy {
  orderList(data: string[]): string[] {
    return data.sort();
  }
}

export { ConcreteStrategyA };

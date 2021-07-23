
import { Context } from "./Context";
import { ConcreteStrategyA } from "./strategies/ConcreteStrategyA";
import { ConcreteStrategyB } from "./strategies/ConcreteStrategyB";

const context = new Context(new ConcreteStrategyA());

console.log(context.orderList());

context.setStrategy(new ConcreteStrategyB());

console.log(context.orderList());

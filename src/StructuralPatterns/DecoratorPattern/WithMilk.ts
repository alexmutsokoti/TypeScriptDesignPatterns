// Based on code from https://en.wikipedia.org/wiki/Decorator_pattern

// Decorator WithMilk mixes milk into coffee.
// Note it extends CoffeeDecorator.

import { Coffee } from "./Coffee";
import { CoffeeDecorator } from "./CoffeeDecorator";

export class WithMilk extends CoffeeDecorator {

    constructor (c : Coffee) {
        super(c);
    }

    getCost() { // Overriding methods defined in the abstract superclass
        return super.getCost() + 0.5;
    }

    getIngredients() {
        return super.getIngredients() + ", Milk";
    }
}
// Based on code from https://en.wikipedia.org/wiki/Decorator_pattern

// Decorator WithSprinkles mixes sprinkles onto coffee.
// Note it extends CoffeeDecorator.

import { Coffee } from "./Coffee";
import { CoffeeDecorator } from "./CoffeeDecorator";

export class WithSprinkles extends CoffeeDecorator {

    constructor (c : Coffee) {
        super(c);
    }

    getCost() { // Overriding methods defined in the abstract superclass
        return super.getCost() + 0.2;
    }

    getIngredients() {
        return super.getIngredients() + ", Sprinkles";
    }
}
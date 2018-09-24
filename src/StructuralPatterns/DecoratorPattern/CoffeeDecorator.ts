// Based on code from https://en.wikipedia.org/wiki/Decorator_pattern

// Abstract decorator class - note that it implements Coffee interface

import { Coffee } from "./Coffee";

export abstract class CoffeeDecorator implements Coffee {
    decoratedCoffee : Coffee;

    constructor(c :Coffee) {
        this.decoratedCoffee = c;
    }

    getCost(): number { // Implementing methods of the interface
        return this.decoratedCoffee.getCost();
    }

    getIngredients() : string {
        return this.decoratedCoffee.getIngredients();
    }
}
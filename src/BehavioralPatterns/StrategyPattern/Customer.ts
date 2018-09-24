// Based on code from https://en.wikipedia.org/wiki/Strategy_pattern#Java

import { BillingStrategy } from "./BillingStrategy";

export class Customer {

    drinks : number[];
    strategy : BillingStrategy;

    constructor(strategy : BillingStrategy) {
        this.drinks = [];
        this.strategy = strategy;
    }

    add(price : number, quantity : number) : void {
        this.drinks.push(this.strategy.getActPrice(price*quantity));
    }

    // Payment of bill
    getBill() : number {
        var sum : number = 0;
        this.drinks.forEach(function(drink){
            sum += drink;
        });
        this.drinks = [];
        return sum;
    }

    // Set Strategy
    setStrategy(strategy : BillingStrategy) : void {
        this.strategy = strategy;
    }

}
// Extension of a simple coffee without any extra ingredients

import { Coffee } from './Coffee';

export class SimpleCoffee implements Coffee {

    getCost() : number {
        return 1;
    }


    getIngredients(): string {
        return "Coffee";
    }
}
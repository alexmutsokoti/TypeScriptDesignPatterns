// Based on code from https://en.wikipedia.org/wiki/Strategy_pattern#Java

import { BillingStrategy } from "./BillingStrategy";

// Normal billing strategy (unchanged price)
export class NormalStrategy implements BillingStrategy {

    getActPrice(rawPrice : number) : number {
        return rawPrice;
    }

}
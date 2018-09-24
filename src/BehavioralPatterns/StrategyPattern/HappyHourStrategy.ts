// Based on code from https://en.wikipedia.org/wiki/Strategy_pattern#Java

import { BillingStrategy } from "./BillingStrategy";

// Strategy for Happy hour (50% discount)
export class HappyHourStrategy implements BillingStrategy {

    getActPrice(rawPrice : number) : number {
        return rawPrice*0.5;
    }

}

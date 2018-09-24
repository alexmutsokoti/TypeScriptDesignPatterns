// Based on code from https://en.wikipedia.org/wiki/Strategy_pattern#Java

export interface BillingStrategy {
    getActPrice(rawPrice : number) : number;
}
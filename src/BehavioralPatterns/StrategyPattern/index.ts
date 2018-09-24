// Based on code from https://en.wikipedia.org/wiki/Strategy_pattern#Java

import { Customer } from "./Customer";
import { BillingStrategy } from "./BillingStrategy";
import { NormalStrategy } from "./NormalStrategy";
import { HappyHourStrategy } from "./HappyHourStrategy";

export abstract class BillingStrattegyPattern {
    normalStrategy : BillingStrategy;
    happyHourStrategy : BillingStrategy;
    
    run(){
        // Prepare strategies
        this.normalStrategy = new NormalStrategy();
        this.happyHourStrategy = new HappyHourStrategy();

        var firstCustomer = new Customer(this.normalStrategy);

        // Normal billing
        firstCustomer.add(1.0, 1);

        // Start Happy Hour
        firstCustomer.setStrategy(this.happyHourStrategy);
        firstCustomer.add(1.0, 2);

        // New Customer
        var secondCustomer = new Customer(this.happyHourStrategy);
        secondCustomer.add(0.8, 1);
        // The Customer pays
        console.log(firstCustomer.getBill());

        // End Happy Hour
        secondCustomer.setStrategy(this.normalStrategy);
        secondCustomer.add(1.3, 2);
        secondCustomer.add(2.5, 1);
        console.log(secondCustomer.getBill());
    }
}
// Based on code from https://en.wikipedia.org/wiki/State_pattern#Java

import { StateContext } from "./StateContext";

export abstract class StatePattern {
    
    run() : void {
        let sc = new StateContext();

        sc.writeName("Monday");
        sc.writeName("Tuesday");
        sc.writeName("Wednesday");
        sc.writeName("Thursday");
        sc.writeName("Friday");
        sc.writeName("Saturday");
        sc.writeName("Sunday");
    }
}
// Based on code from https://en.wikipedia.org/wiki/State_pattern#Java

import { Statelike } from "./Statelike";
import { StateContext } from "./StateContext";
import { StateUpperCase } from "./StateUpperCase";

export class StateLowerCase implements Statelike {
    
    writeName(context : StateContext, name : string) : void {
        console.log(name.toLowerCase());
        context.setState(new StateUpperCase());
    }
}

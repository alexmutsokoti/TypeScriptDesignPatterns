// Based on code from https://en.wikipedia.org/wiki/State_pattern#Java

import { Statelike } from "./Statelike";
import { StateContext } from "./StateContext";
import { StateLowerCase } from "./StateLowerCase";

export class StateUpperCase implements Statelike {

    writeName(context : StateContext, name : String) : void {
        console.log(name.toUpperCase());
        context.setState(new StateLowerCase());
    }
}
// Based on code from https://en.wikipedia.org/wiki/State_pattern#Java

import { Statelike } from "./Statelike";
import { StateLowerCase } from "./StateLowerCase";
import { StateUpperCase } from "./StateUpperCase";

export class StateContext {
    private myState : Statelike;

    constructor() {
        this.setState(new StateLowerCase());
    }

    /**
     * Setter method for the state.
     * Normally only called by classes implementing the State interface.
     * @param newState the new state of this context
     */
    setState(newState : Statelike) : void {
        this.myState = newState;
    }

    writeName(name : string) : void {
        this.myState.writeName(this, name);
    }
}
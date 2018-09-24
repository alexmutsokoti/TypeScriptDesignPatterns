// Based on code from https://en.wikipedia.org/wiki/State_pattern#Java

import { StateContext } from "./StateContext";

export interface Statelike {
    writeName(context : StateContext , name : string) : void;
}
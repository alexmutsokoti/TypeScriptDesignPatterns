// Based on code from https://en.wikipedia.org/wiki/Decorator_pattern

// The interface Coffee defines the functionality of Coffee implemented by decorator

export interface Coffee {
    getCost() : number; // Returns the cost of the coffee
    getIngredients() : string; // Returns the ingredients of the coffee
}

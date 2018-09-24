import { Coffee } from "./Coffee";
import { SimpleCoffee } from "./SimpleCoffee";
import { WithMilk } from "./WithMilk";
import { WithSprinkles } from "./WithSprinkels";

export abstract class CoffeeDecoratorPattern {

    run(){
        let c = new SimpleCoffee();
        this.printInfo(c);
        
        c = new WithMilk(c);
        this.printInfo(c);

        c = new WithSprinkles(c);
        this.printInfo(c);
    }

    printInfo(c : Coffee) {
        console.log("Cost: " + c.getCost() + "; Ingredients: " + c.getIngredients());
    }
}
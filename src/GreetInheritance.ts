/**
 * Created by pankaj.bhagchandani on 21/09/2016.
 */
export class GreetParent {

    constructor(public greeting: string) {
    };

    greet() {
        return "Hello, " + this.greeting + "This is Parent class.";
    };
}

export class GreetChild extends GreetParent{

    constructor(public greeting: string) {
        super(greeting);
    };
    greet() {
        let greeting = super.greet();
        return greeting + "And this is child after parent";
    };
}

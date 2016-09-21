/**
 * Created by pankaj.bhagchandani on 21/09/2016.
 */
export default class GreetClass {
    greeting: string;
    constructor(message:string) {
        this.greeting = message;
    };

    greet() {
        return "Hello, "+ this.greeting;
    };
}

/**
 * Created by pankaj.bhagchandani on 21/09/2016.
 */
export default class GenericsGreet<T> {
    greeting: T;
    constructor(message:T) {
        this.greeting = message;
    };

    greet() {
        return this.greeting;
    };
}

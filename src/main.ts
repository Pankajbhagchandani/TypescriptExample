import * as Hello from "./greet";
import  GreetClass from "./GreetClass";
import {GreetParent,GreetChild} from "./GreetInheritance";
import GenericGreet from "./GenericsGreet";
import hello from "./GreetUnionAndType";
let showHello = (divName: string, name: string) => {
    // function call
    const elt = document.getElementById(divName);
    elt.innerText = Hello.sayHello(name);

    //call the class method
    const greetClass = new GreetClass("TypescriptClass");
    elt.innerText = greetClass.greet();

    //call inherited class
    const parent:GreetParent = new GreetChild("Typescript");
    elt.innerText = parent.greet();

    const genericGreet = new GenericGreet("Typescript From Generic");
    elt.innerText = genericGreet.greet();

    const genericGreetType2 = new GenericGreet<Number>(123);
    elt.innerText = "" + genericGreetType2.greet();

    // using union and types
    elt.innerText = ""+ hello(['One','Two']);
};
showHello("greeting", "Typescript");
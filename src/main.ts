import * as Hello from "./greet";

let showHello = (divName: string, name: string) => {
    const elt = document.getElementById(divName);
    //var g = new Greeter();
    elt.innerText = Hello.sayHello(name);
}

showHello("greeting", "Typescript");
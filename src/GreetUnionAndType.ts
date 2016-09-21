/**
 * Created by pankaj.bhagchandani on 21/09/2016.
 */
type NameOrNameArray = string | string[];

let hello = (name: NameOrNameArray) => {
    if(typeof name === 'string')
    {
        return "Hello"+name;
    }else {
        return "Hello "+ name.join(" ");
    }
};
export {hello as default};


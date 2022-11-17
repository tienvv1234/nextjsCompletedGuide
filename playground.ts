interface Person {
    name: string;
}

// this expression T extends () => string
// this mean T is a function that return string
// type ReturnType<T> = T extends () => string ? string : number 

// this expression
// inter keyword will create new (maybe return type or type) type R 
type ReturnType<T> = T extends () => infer R ? R : number;


export default function play() {
    function logger() {
        return "hello world";
    }
    const loggerReturn1: ReturnType<typeof logger> = "hi";
}
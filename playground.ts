interface Person {
    name: string;
    age: number;
}

type Logger<
T = string, 
E = number, 
R = string
> = (param1: T, param2: E) => R;


export default function play() {
    const superLogger: Logger<string, number, string> = (param1, param2) => {
        return 'param1 + param2';
    }
}
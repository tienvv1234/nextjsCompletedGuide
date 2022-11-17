interface Person {
    name: string;
}

export default function play() {
    function logger(...args: any) {
        return "hello world";
    }

    const kindaLogger: typeof logger = (name: string, age: number) => "hello world";

    kindaLogger('abc', 20)
}
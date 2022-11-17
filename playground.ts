interface Person {
    name: string;
}

type CustomArray = {
    [index: number]: string;
};

type CustomObject<T = string | number | Person> = {
    [key: string]: T;
}

export default function play() {
    const person: CustomObject = {
        age: 20,
        name: "John",
        surname: "Doe",
        person: {
            name: "John"
        }
    }
}
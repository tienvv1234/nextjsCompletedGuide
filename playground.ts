interface Person {
    name: string;
    age: number;
}

type PersonKeys = keyof Person; // 'name' | 'age'

export default function play() {
    const personKey: PersonKeys = 'age';
    console.log(personKey);
}
interface Person {
    name: string;
    age: number;
    city: string;
}

interface Car {
    name: string;
}

type CarOne = {
    brand: string;
    age: number;
    city: string;
    name: string;
}

// this is default value when we don't pass any value
class Logger<T extends Person = CarOne> {
    log(items: Array<T>, callback: (i: T) => void) {
        items.forEach((item) => {
            callback(item);
        });
    }
}

class Student implements Person {
    name = '';
    age= 0;
    city = '';
}

class Teacher implements Person {
    name = '';
    age= 0;
    city = '';
    salary = 1000;
}

export default function play() {
    // default value is car one
    const loggerPerson = new Logger();
    const persons = [{ name: 'John', age: 0, city: '', brand: '' }, { name: 'Jane', age: 0, city: '', brand: '' }];
    loggerPerson.log(persons, (person: Person) => {
        console.log(person.name);
    });
}
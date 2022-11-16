interface Person {
    name: string;
    age: number;
    city: string;
}

interface Car {
    name: string;
}

class Logger<T extends Person> {
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
    const loggerPerson = new Logger<Teacher>();
    const persons = [{ name: 'John', age: 0, city: '' }, { name: 'Jane', age: 0, city: ''}];
    loggerPerson.log(persons, (person: Person) => {
        console.log(person.name);
    });
}
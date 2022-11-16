class Logger<T> {
    log(items: Array<T>, callback: (i: T) => void) {
        items.forEach((item) => {
            callback(item);
        });
    }
}

interface Person {
    name: string;
}
export default function play() {
    const logger = new Logger<string>();

    const cars = ['Ford', 'Chevy', 'Buick'];
    logger.log(cars, (car: string) => {
        console.log(car);
    });

    const loggerPerson = new Logger<Person>();
    const people = [{ name: 'John' }, { name: 'Jane' }];
    loggerPerson.log(people, (person: Person) => {
        console.log(person.name);
    });
}
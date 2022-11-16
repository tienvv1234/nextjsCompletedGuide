export default function play() {
    console.log('hello world')
    const name = 'world'
    const age = 20
    function logPersionInfo(personName: string, personAge: number) {
        const info = `My name is ${personName} and I am ${personAge} years old`;
        console.log(info);
        return info;
    }

    logPersionInfo('John', 30);
    logPersionInfo(name, age);
}
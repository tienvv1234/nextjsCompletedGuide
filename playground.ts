interface Person {
    name: string;
}

interface Student extends Person {
    age: number;
}

interface PostGraduateStudent extends Student {
    projects: string[];
}

type StudentInfo<T extends any = Student> = T extends Student ?  {
    data: T;
    grades: number[];
} : string

type Car = { engine: string; }
export default function play() {
    
    function logStudentInfo(info: StudentInfo) {
        console.log(info.data.name);
        console.log(info.data.age);
    }

    function logStudentInfo1(info: StudentInfo<Car>) {
        console.log(info);
    }

    const info = {
        data: {
            name: 'John',
            age: 20,
            projects: ['Project 1', 'Project 2']
        },
        grades: [1, 2, 3]
    }

    logStudentInfo(info);
    logStudentInfo1('Hello');
}
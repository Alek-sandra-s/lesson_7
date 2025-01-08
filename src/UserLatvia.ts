export class UserLatvia {
    name: string;
    surname: string;
    age: number;
    activateEParakstsForLatvia: boolean | undefined;

    constructor(name: string, surname: string, age: number) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}
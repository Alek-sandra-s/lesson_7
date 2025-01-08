export class UserEstonia {
    name: string;
    surname: string;
    age: number;
    mobileIDAuthorization: boolean | undefined;

    constructor(name: string, surname: string, age: number) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}
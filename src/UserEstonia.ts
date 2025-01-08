import {UserBase} from "./UserBase";

export class UserEstonia extends UserBase{
    mobileIDAuthorization: boolean | undefined;

    constructor(name: string, surname: string, age: number) {
        super(name, surname, age);
    }
}

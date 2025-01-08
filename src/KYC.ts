import {UserLatvia} from "./UserLatvia";
import {UserEstonia} from "./UserEstonia";

export class KYC {
    static activateMobileIDForEstonia(User: UserEstonia): void {
        if (User.age >= 16) {
            User.mobileIDAuthorization = true;
        } else {
            throw new Error("User is too young");
        }
    }

    static activateEParakstsForLatvia(User: UserLatvia): void {
        if (User.age >= 18) {
            User.activateEParakstsForLatvia = true;
        } else {
            throw new Error("User is too young")
        }
    }
}
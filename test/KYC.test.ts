import {UserEstonia} from "../src/UserEstonia";
import {UserLatvia} from "../src/UserLatvia";
import {KYC} from "../src/KYC";

describe("KYC tests", () => {
    let oldEstonianUser: UserEstonia;
    let youngEstonianUser: UserEstonia;
    let oldLatvianUser: UserLatvia;
    let youngLatvianUser: UserLatvia;

    beforeEach(() => {
        oldEstonianUser = new UserEstonia("Jakob", "Lvovich", 24);
        youngEstonianUser = new UserEstonia("Jakob", "Lvovich", 15);
        oldLatvianUser = new UserLatvia("Jakob", "Lvovich", 24);
        youngLatvianUser = new UserLatvia("Jakob", "Lvovich", 17);
    })

    //1 case
    test ("ESTONIA: mobileIDAuthorization default value is undefined", () => {
        expect (oldEstonianUser.mobileIDAuthorization).toBeUndefined();

    })
    test ("Latvia: mobileIDAuthorization default value is undefined", () => {
        expect (oldLatvianUser.activateEParakstsForLatvia).toBeUndefined();
    })

    //case 2, 3
    test("ESTONIA: activateMobileIDForEstonia works", () => {
        KYC.activateMobileIDForEstonia(oldEstonianUser);
        expect(oldEstonianUser.mobileIDAuthorization).not.toBeUndefined();
        expect(oldEstonianUser.mobileIDAuthorization).toBeTruthy();
    })
    test("Latvia: activateEParakstsForLatvia works", () => {
        KYC.activateEParakstsForLatvia(oldLatvianUser);
        expect(oldLatvianUser.activateEParakstsForLatvia).not.toBeUndefined();
        expect(oldLatvianUser.activateEParakstsForLatvia).toBeTruthy();
    })

    //case 4
    test("ESTONIA: activateMobileIDForEstonia throws error", () => {
        expect(() => {
            KYC.activateMobileIDForEstonia(youngEstonianUser)
        }).toThrow("User is too young");
    })
    test("LATVIA: activateEParakstsForLatvia throws error", () => {
        expect(() => {
            KYC.activateEParakstsForLatvia(youngLatvianUser)
        }).toThrow("User is too young");
    })
})

export class User {
    constructor(public id: number = 0, public email: string = "", public password: string = "") {

    }
    checkUser(user: User): boolean {
        if (user.email === "ash@zensar.com" && user.password === "Zensar123") {
            return true;
        }
        return false;
    }
}
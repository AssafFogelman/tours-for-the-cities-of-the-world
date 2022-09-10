export class User {
    constructor(name, lname, email, password) {
        this.name = name;
        this.lname = lname;
        this.email = email;
        this.password = password;
        this.id = this.generateId();
    }
    generateId() {
        return Date.now();
    }
}

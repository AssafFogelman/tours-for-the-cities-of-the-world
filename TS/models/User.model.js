"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
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
exports.User = User;

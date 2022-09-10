export class User {
  name: string;
  lname: string;
  email: string;
  password: string;
  id: number;
  constructor(name: string, lname: string, email: string, password: string) {
    this.name = name;
    this.lname = lname;
    this.email = email;
    this.password = password;
    this.id = this.generateId();
  }
  generateId(): number {
    return Date.now();
  }
}

'use strict';
class User {
  constructor (name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.year = year;
  }
  set fullName(newFullName) {
    const splittedFull = newFullNAme.split("");
    this.name = splittedFullName [0];
    this.surname = splittedFullName[1];
  }
  get fullName(){
    return `${this.name} ${this.surname}`;
  }
  static isUser(user){
    return user instanceof User;
  }
}

class Student extends User {
  constructor (name, surname, year){
    super (name, surname, year)
  }
  
  getCourse(){
    let date = new Date();
    return date - this.year;
  }
}
const u = new User ('Mark', 'Smith', 2018);
const s = new Student ('Ivan', 'Ivanov', 2020);
console.log(User);
console.log(Student);


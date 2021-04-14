'use strict';
class User {
  constructor (name, surname) {
    this.name = name;
    this.surname = surname;
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
    super (name, surname);
    this.year = year;
  }
  set year (newYear) {
    if (typeof newYear !== "number"){
      throw new TypeError();
    }
    this._year = newYear;
  }
  get year(){
    return this._year;
  }
  get course(){
    const yearNow = new Date().getFullYear();
    const numOfCourse = yearNow - this.year + 1;
    if (numOfCourse < 1 || numOfCourse > 5){
      throw new RangeError ("Wrong number!");
    }
  }
}


const u = new User ('Mark', 'Smith');
const s = new Student ('Ivan', 'Ivanov', 2020);
console.log(User);
console.log(Student);
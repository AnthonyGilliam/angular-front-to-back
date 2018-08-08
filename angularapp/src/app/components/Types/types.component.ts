import { Component } from '@angular/core';

@Component({
  selector: 'dummy-component',
  templateUrl: './types.component.html',
  styleUrls: [ './types.component.css' ],
})
export class TypesComponent {
  //Properties
  firstName: string;
  lastName: string;
  age: number;
  address;

  foo: any[];
  hasKids: boolean;
  numberArray: number[];
  myTuple: [string, number, boolean];

  //Methods
  constructor() {
    this.firstName = 'John'
    this.lastName = 'Doe'
    this.age = 30;
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    };
    this.foo = [ true, 1, 'You know' ];
    this.hasKids = true;
    this.numberArray = [ 1, 2, 3 ];
    this.myTuple = ['Hello', 1, true];
  }

  showAge(){
    return this.age + 2;
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`)
  }

  hsasBirthday() {
    this.age += 1;
  }

  addNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }
}

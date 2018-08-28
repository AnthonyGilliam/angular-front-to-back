import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {User} from "../models/User";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johan@email.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@email.com',
        isActive: false,
        registered: new Date('05/03/2016 11:30:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'karen@email.com',
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }
    ];
  }

  getData(){
    this.data = new Observable<any>(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next({  name: 'Brad' });
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    console.log('Fetching users from service')
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}

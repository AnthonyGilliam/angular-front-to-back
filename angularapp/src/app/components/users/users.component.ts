import { Component, OnInit } from '@angular/core';
import { User } from "../../models/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean;
  loaded: boolean;
  versionNum: number;
  siteImageSrc: string;

  constructor() { }

  ngOnInit() {
    //Use property binding on the [src] attribute of the <img> tag to dynamically change an HTML image
    //Only 1 image will be loaded on the client per [src] binding! :)
    this.versionNum = 5;
    this.siteImageSrc = this.versionNum == 5 ? "../../../assets/angular5.png" : "../../../assets/angular6.png";

    this.showExtended = true;

    this.loaded = false;

    setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
          }
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 34,
          address: {
            street: '20 School st',
            city: 'Lynn',
            state: 'MA'
          }
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,
          address: {
            street: '55 Mill st',
            city: 'Miami',
            state: 'FL'
          }
        }
      ];

      this.addUser({
        firstName: 'David',
        lastName: 'Jackson',
      });

      this.loaded = true;
    }, 2000);
  }

  addUser(user: User){
    this.users.push(user);
  }

}

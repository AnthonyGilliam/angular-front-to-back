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
  enableAdd: boolean = false;
  currentClasses = {};
  currentStyles: {};

  constructor() { }

  ngOnInit() {
    //Use property binding on the [src] attribute of the <img> tag to dynamically change an HTML image
    //Only 1 image will be loaded on the client per [src] binding! :)
    this.versionNum = 6;
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
          },
          image: 'https://loremflickr.com/600/600/brazil,guy',
          isActive: true,
          balance: 100,
          registered: new Date('01/02/2018 08:30:00')
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 34,
          address: {
            street: '20 School st',
            city: 'Lynn',
            state: 'MA'
          },
          image: 'https://loremflickr.com/600/600/paris,guy',
          isActive: false,
          balance: 200,
          registered: new Date('01/02/2018 08:30:00')
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,
          address: {
            street: '55 Mill st',
            city: 'Miami',
            state: 'FL'
          },
          image: 'https://loremflickr.com/600/600/brazil,girl',
          isActive: true,
          balance: 50,
          registered: new Date('11/02/2016 10:30:00')
        }
      ];

      this.addUser({
        firstName: 'David',
        lastName: 'Jackson',
      });

      this.loaded = true;
      this.setCurrentClasses();
      this.setCurrentStyles();
    }, 2000);
  }

  addUser(user: User){
    this.users.push(user);
  }

  setCurrentClasses() {
    this.enableAdd = true;
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '40px' : 0,
      'font-size': this.showExtended ? '' : '40px'
    }
  }
}

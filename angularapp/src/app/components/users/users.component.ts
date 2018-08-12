import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from "../../models/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User =
  {
    firstName: '',
    lastName: '',
    email:''
  };
  users: User[];
  loaded: boolean;
  versionNum: number;
  siteImageSrc: string;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm')form: any;

  constructor() { }

  ngOnInit() {
    //Use property binding on the [src] attribute of the <img> tag to dynamically change an HTML image
    //Only 1 image will be loaded on the client per [src] binding! :)
    this.versionNum = 6;
    this.siteImageSrc = this.versionNum == 5 ? "../../../assets/angular5.png" : "../../../assets/angular6.png";
    this.loaded = false;

    setTimeout(() => {
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

      this.loaded = true;
      this.enableAdd = true;
    }, 2000);
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }){
    if(!valid){
      console.log('Form is not valid');
    }
    else {
      let user = value;
      user.isActive = true;
      user.registered = new Date();
      user.hide = true;
      this.users.unshift(user);
      this.form.reset();
    }
  }
}

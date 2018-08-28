import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from "../../models/User";
import { UserService} from "../../services/user.service";

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
  data: any;

  constructor(private userService: UserService) {  }

  ngOnInit() {
    //Use property binding on the [src] attribute of the <img> tag to dynamically change an HTML image
    //Only 1 image will be loaded on the client per [src] binding! :)
    this.versionNum = 6;
    this.siteImageSrc = this.versionNum == 5 ? "../../../assets/angular5.png" : "../../../assets/angular6.png";
    this.loaded = false;

    this.userService.getData().subscribe(data => {
      console.log(data);
    });

    setTimeout(() => {
      this.userService.getUsers().subscribe(users => {
        this.users = users;
      });
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

      this.userService.addUser(user);

      this.form.reset();
    }
  }
}

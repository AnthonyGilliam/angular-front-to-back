import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { SettingsService } from '../../services/settings.service';
import { AuthService } from '../../services/auth.service';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;

  constructor(private router: Router,
              private toastr: ToastrService,
              private settingService: SettingsService,
              private authService: AuthService) { }

  ngOnInit() {
    this.authService
      .getAuth()
      .subscribe(auth => {
        if (auth) {
          this.isLoggedIn = true;
          this.loggedInUser = auth.email;
        } else {
          this.isLoggedIn = false;
        }
      });
    this.showRegister = this.settingService.getSettings().allowRegistration;
  }

  onLogout() {
    this.authService.logout();
    this.toastr.success('You are now logged out', 'Success!');
    this.router.navigate(['/login']);
  }
}

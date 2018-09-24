import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router,
              private toastr: ToastrService,
              private authService: AuthService) { }

  ngOnInit() {
    this.authService
      .getAuth()
      .subscribe(auth => {
        if (auth) {
          this.router.navigate(['/']);
        }
    });
  }

  onSubmit() {
    this.authService.login(this.email, this.password)
      .then(response => {
        this.toastr.success('You are now logged in', 'Success!');
        this.router.navigate(['/']);
      }, err => {
        this.toastr.error(err, 'Could Not Login', { timeOut: 10000 });
      });
  }
}

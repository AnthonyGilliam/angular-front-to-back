import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router,
              private toastr: ToastrService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService
      .register(this.email, this.password)
      .then(result => {
        this.toastr.success('You are now registered and logged in', 'Success!');
        this.router.navigate(['/']);
      })
      .catch(err => {
        this.toastr.error(err, 'Failed to Register');
      });
  }
}

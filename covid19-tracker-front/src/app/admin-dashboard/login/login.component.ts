import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminDataService } from '../admin-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  loginFormErrors = {
    email: {
      required: 'Email is Required'
    },
    password: {
      required: 'Password is required'
    }
  };

  constructor(private fb: FormBuilder, private adminService: AdminDataService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      this.adminService.login(this.loginForm.value).subscribe((result: any) => {
        localStorage.setItem('token', result.token);
        this.router.navigate(['/admin/dashboard']);
      }, err => {
        console.log(err);
      });
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}

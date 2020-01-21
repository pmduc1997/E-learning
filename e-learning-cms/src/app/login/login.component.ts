import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  credentials = {
    username: '',
    password: ''
  }
  constructor(public authService: AuthService, private router: Router) {
    if (this.authService.loggedIn) {
      this.router.navigate(['main']);
    }
  }

  ngOnInit() {
  }

  _onLogin() {
    if (this.authService.login(this.credentials.username, this.credentials.password)) {
      this.router.navigate(['main']);
    }
    else {
      alert('wrong')
    }
  }
  _onKey() {
    console.log(this.credentials)
  }
}

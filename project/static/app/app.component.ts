import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  loggedIn = false;
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  submitted = false;

  constructor(private appService: AppService) { }

  isLoggedIn() {
    this.appService.isLoggedIn()
      .subscribe(data => {
        this.loggedIn = data['is_logged_in'];
    })
  }

  login() {
    this.appService.login(this.username, this.password)
      .subscribe(data => {
        location.href = 'http://0.0.0.0:5000/';
    });
  }

  register() {
    this.appService.register({
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      }).subscribe(data => {
        this.login();
      });
  }

  ngOnInit() {
    this.appService.currentProfileID = 0;
    this.isLoggedIn();
  }
}

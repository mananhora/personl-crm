import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  username = '';
  password = '';
  submitted = false;

  onSubmit() {
    this.loginService.submitForm({
        username: this.username,
        password: this.password,
      }).subscribe();
  }

  ngOnInit() { }

}

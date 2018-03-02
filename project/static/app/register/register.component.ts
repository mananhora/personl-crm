import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) { }

  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  submitted = false;

  onSubmit() {
    this.registerService.submitForm({
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      }).subscribe();
  }

  ngOnInit() { }

}

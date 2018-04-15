import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
// import { CircleService } from './circles/circles.service';
import { Circle } from './circles/circle';
import { Profile } from './profile/profile';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

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
  school = new Circle('', 1);
  hometown = new Circle('', 2);
  circles = [this.hometown, this.school];
  submitted = false;
  removable = true;
  separatorKeysCodes = [ENTER, COMMA];

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

  addFriend(event: MatChipInputEvent, circle: Circle): void {
    let input = event.input;
    let value = event.value;

    // Add friend
    if ((value || '').trim()) {
      if (circle.friends) {
        circle.friends.push(value.trim());
      } else {
        circle.friends = [value.trim()];
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeFriend(friend: any, circle: Circle): void {
    let index = circle.friends.indexOf(friend);

    if (index >= 0) {
      circle.friends.splice(index, 1);
    }
  }

  register() {
    this.appService.register({
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      }).subscribe(data => {
        // @TODO if successful, add circles
        // for (circle in this.circles) {
        //   this.circlesService.addCircle(circle.name)
        // }
        this.login();
      });
  }

  ngOnInit() {
    this.appService.currentProfileID = 0;
    this.isLoggedIn();
  }
}

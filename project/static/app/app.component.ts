import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { CirclesService } from './circles/circles.service';
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
  school: Circle;
  hometown: Circle;
  circles: Circle[];
  removable = true;
  separatorKeysCodes = [ENTER, COMMA];

  constructor(private appService: AppService,
    private circlesService: CirclesService) { }

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
    this.appService.register(this.username, this.email, this.password, this.confirmPassword)
      .subscribe(data => {
        this.appService.login(this.username, this.password)
          .subscribe(data => {
            for (let i = 0; i < this.circles.length; i++) {
              this.circlesService.addCircle(this.circles[i].name).subscribe();
              // for (let i = 0; i < this.circles[i].friends.length; i++) {
              //   this.circlesService.addFriendToCircle(this.circles[i].friends[i], this.circles[i]);
              // }
            }
        });
      });
  }

  ngOnInit() {
    this.appService.currentProfileID = 0;
    this.isLoggedIn();
    this.school = new Circle('', 1);
    this.hometown = new Circle('', 2);
    this.circles = [this.hometown, this.school];
  }
}

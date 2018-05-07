import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { MatChipInputEvent, MatStepper } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { CirclesService } from './circles/circles.service';
import { FriendsService } from './friends/friends.service';
import { Circle } from './circles/circle';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  loggedIn = false;
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  school: Circle;
  hometown: Circle;
  circles: Circle[];
  isLinear = true;
  removable = true;
  separatorKeysCodes = [ENTER, COMMA];

  constructor(private appService: AppService, private friendsService: FriendsService,
    private circlesService: CirclesService) { }

  /**
   * @function isLoggedIn
   * sets loggedIn variable
   */
  isLoggedIn() {
    this.appService.isLoggedIn()
      .subscribe(data => {
        this.loggedIn = data['is_logged_in'];
    })
  }

  /**
   * @function login
   * login user from email and password. redirect to homepage
   */
  login() {
    this.appService.login(this.email, this.password).subscribe(data => {
      if (data['result']) {
        location.href = 'http://0.0.0.0:5000/';
      } else {
        alert(data['description']);
      }
    });
  }

  /**
   * @function register
   * registers a new user account
   */
  register() {
    this.appService.register(this.name, this.email, this.password, this.confirmPassword).subscribe(data => {
      if (data['result']) {
        this.appService.login(this.email, this.password).subscribe(data => {
          if (data['result']) {
            for (let i = 0; i < this.circles.length; i++) {
              this.circlesService.addCircle(this.circles[i].name).subscribe(data => {
                if (data['result']) {
                  this.circles[i].id = data['circle']['id'];
                  for (let j = 0; j < this.circles[i].friends.length; j++) {
                    this.friendsService.addFriend(this.circles[i].friends[j].name, '', [this.circles[i]]).subscribe(data => {
                      if (!data['result']) {
                        alert(data['description']);
                      }
                    });
                  }
                } else {
                  alert(data['description']);
                }
              });
            }
          } else {
            alert(data['description']);
          }
        });
        location.href = 'http://0.0.0.0:5000/';
      } else {
        alert(data['description']);
      }
    });
  }

  skip(stepper: MatStepper) {
    stepper.next();
    stepper.next();
  }

  /**
   * @function addFriend
   * @param {MatChipInputEvent} event - event triggered at chip input
   * @param {Circle} circle - circle to which chip data (friends) will be added
   */
  addFriend(event: MatChipInputEvent, circle: Circle): void {
    let input = event.input;
    let value = event.value;
    if ((value || '').trim()) {
      let friend = new Profile(value.trim(), '', 0);
      if (circle.friends) {
        circle.friends.push(friend);
      } else {
        circle.friends = [friend];
      }
    }
    if (input) input.value = '';
  }

  /**
   * @function removeFriend
   * @param {Profile} friend - friend we would like to remove
   * @param {Circle} circle - circle we are removing the friend from
   */
  removeFriend(friend: Profile, circle: Circle): void {
    let index = circle.friends.indexOf(friend);
    if (index >= 0) circle.friends.splice(index, 1);
  }

  /**
   * @function ngOnInit
   * checks if logged in. sets empty values for circles
   */
  ngOnInit() {
    this.isLoggedIn();
    this.school = new Circle('', 1);
    this.hometown = new Circle('', 2);
    this.circles = [this.hometown, this.school];
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProfileService } from './profile.service';
import { Profile } from './profile';
import { Circle } from '../circles/circle';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  routeId: number;
  model = new Profile('', '', 0,);

  constructor(private profileService: ProfileService,
    private route: ActivatedRoute, private router: Router,
    private location: Location, public dialog: MatDialog) { }

  //update favorite on database
  changeFavorite(value){
    console.log(value);
    //update database on this value??
  }

  // get user's profile, limited data options
  getMyProfile() {
    this.profileService.getMyProfile()
      .subscribe(data => {
        if (data['friend']['name']) this.model.name = data['friend']['name'];
        if (data['friend']['email']) this.model.email = data['friend']['email'];
        if (data['friend']['id']) this.model.id = data['friend']['id'];
        if (data['friend']['image_url']) this.model.img = data['friend']['image_url'];
        if (data['friend']['circles']) this.model.circles = data['friend']['circles'];
        if (data['friend']['phone_number']) this.model.phone = data['friend']['phone_number'];
        if (data['friend']['location']) this.model.location = data['friend']['location'];
        if (data['friend']['job']) this.model.job = data['friend']['job'];
    })
  }

  getFriendProfile(id: number) {
    this.profileService.getFriendProfile(id)
      .subscribe(data => {
        if (data['friend']['name']) this.model.name = data['friend']['name'];
        if (data['friend']['email']) this.model.email = data['friend']['email'];
        if (data['friend']['id']) this.model.id = data['friend']['id'];
        (data['friend']['image_url']) ? this.model.img = data['friend']['image_url'] :
          this.model.img = 'assets/images/profile.png';
        if (data['friend']['circles']) this.model.circles = data['friend']['circles'];
        if (data['friend']['phone_number']) this.model.phone = data['friend']['phone_number'];
        if (data['friend']['location']) this.model.location = data['friend']['location'];
        if (data['friend']['reminder_frequency']) this.model.reminder.frequency = data['friend']['reminder_frequency'];
        if (data['friend']['notes']) this.model.notes = data['friend']['notes'];
        if (data['friend']['job']) this.model.job = data['friend']['job'];
    });
    this.getCirclesForFriend(id);
  }

  getCirclesForFriend(id: number) {
    this.profileService.getCirclesForFriend(id)
      .subscribe(data => {
        for (let i = 0; i < data['circles'].length; i++) {
          if (this.model.circles) {
            this.model.circles.push(new Circle(
              data['circles'][i].circle_name,
              data['circles'][i].id));
          } else {
            this.model.circles = [new Circle(
              data['circles'][i].circle_name,
              data['circles'][i].id)];
          }
        }
      })
  }

  goBack() {
    this.router.navigate(['/app/friends']);
  }

  ngOnInit() {
    this.routeId = +this.route.snapshot.paramMap.get('id');

    if (this.routeId) {
      this.getFriendProfile(this.routeId);
    } else {
      this.getMyProfile();
    }
  }

}

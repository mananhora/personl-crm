import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CirclesService } from '../circles.service';
import { FriendsService } from '../../friends/friends.service';
import { Circle } from '../circle';
import { Profile } from '../../profile/profile';

@Component({
  selector: 'app-circles-add',
  templateUrl: './circles.add.component.html',
  styleUrls: ['./circles.add.component.css']
})
export class CirclesAddComponent implements OnInit {

  circle: Circle;
  allCircles: Circle[];
  selectedParentCircles: Circle[];
  selectedChildCircles: Circle[];
  friends: Profile[];
  selectedFriends: Profile[];

  constructor(private circlesService: CirclesService,
    private friendsService: FriendsService,
    private router: Router,
    private location: Location) { }

  addCircle() {
    this.circlesService.addCircle(this.circle.name)
      .subscribe(data => {
        // @TODO should return ID of the circle
        // this.circle.id = data['id'];
        this.router.navigate(['/app/home']);
      });

    // for (friend in selectedFriends) {
    //   this.circlesService.addFriendToCircle({
    //     friend_id: friend,
    //     circle_id: this.circle.id,
    //   });
    // }
    //
    // for (circle in this.selectedParentCircles) {
    //   this.circlesService.addChildCircle({
    //     parent_id: circle.id,
    //     cild_id: this.circle.id,
    //   });
    // }
    //
    // for (circle in this.selectedChildCircles) {
    //   this.circlesService.addFriendToCircle({
    //     parent_id: this.circle.id,
    //     child_id: circle_id,
    //   });
    // }

  }

  getAllCircles() {
    this.circlesService.getCircles()
      .subscribe(data => {
        for (let i = 0; i < data['json_list'].length; i++) {
          let name = data['json_list'][i]['circle_name'];
          let id = data['json_list'][i]['id'];
          let circle = new Circle(name, id);

          if (this.allCircles) {
            this.allCircles.push(circle);
          } else {
            this.allCircles = [circle];
          }
        }
    });
  }

  getAllFriends() {
    this.friendsService.getAllFriends()
      .subscribe(data => {
        for (let i = 0; i < data['json_list'].length; i++) {
          let name = data['json_list'][i]['name'];
          let email = data['json_list'][i]['email'];
          let id = data['json_list'][i]['id'];
          let profile = new Profile(name, email, id);

          if (this.friends) {
            this.friends.push(profile);
          } else {
            this.friends = [profile];
          }
        }
    })
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.circle = new Circle('', 123);
    this.getAllCircles();
    this.getAllFriends();
  }

}

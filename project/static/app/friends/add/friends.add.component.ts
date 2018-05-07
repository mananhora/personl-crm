import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FriendsService } from '../friends.service';
import { CirclesService } from '../../circles/circles.service';
import { Profile } from '../../profile/profile';
import { Circle } from '../../circles/circle';

@Component({
  selector: 'app-friends-add',
  templateUrl: './friends.add.component.html',
  styleUrls: ['./friends.add.component.css']
})
export class FriendsAddComponent implements OnInit {

  friend: Profile;
  circles: Circle[];

  constructor(private circlesService: CirclesService,
    private friendsService: FriendsService,
    private router: Router, private location: Location) { }

  addFriend() {
    this.friendsService.addFriend(this.friend.name, this.friend.email, this.friend.circles).subscribe(data => {
      if (!data['result']) {
        alert(data['description']);
      }
    });
    this.router.navigate(['/app/friends']);
  }

  getAllCircles() {
    this.circlesService.getCircles()
      .subscribe(data => {
        for (let i = 0; i < data['circles'].length; i++) {
          let name = data['circles'][i]['circle_name'];
          let id = data['circles'][i]['id'];
          let circle = new Circle(name, id);

          if (this.circles) {
            this.circles.push(circle);
          } else {
            this.circles = [circle];
          }
        }
      });
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.friend = new Profile('', '', 0);
    this.getAllCircles();
  }

}

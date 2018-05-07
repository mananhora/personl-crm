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
  parentCircle: Circle;
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
        if (data['result']) {
          this.circle.id = data['circle']['id'];

          // add friends to circle
          for (let i = 0; i < this.selectedFriends.length; i++) {
            this.circlesService.addFriendToCircle(this.selectedFriends[i].id, this.circle.id).subscribe();
          }
          // add circle as a child
          if (this.parentCircle) {
            this.circlesService.assignChildCircle(this.parentCircle.id, this.circle.id).subscribe(data => {
              if (!data['result']) {
                alert(data['description']);
              }
            });
          }

          // add children circles
          for (let i = 0; i < this.selectedChildCircles.length; i++) {
            this.circlesService.assignChildCircle(this.circle.id, this.selectedChildCircles[i].id).subscribe(data => {
              if (!data['result']) {
                alert(data['description']);
              }
            });
          }

          this.router.navigate(['/app/friends/', this.circle.id]);
        } else {
          alert(data['description']);
        }
      });
  }

  getAllCircles() {
    this.circlesService.getCircles()
      .subscribe(data => {
        for (let i = 0; i < data['circles'].length; i++) {
          let name = data['circles'][i]['circle_name'];
          let id = data['circles'][i]['id'];
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
        for (let i = 0; i < data['friends'].length; i++) {
          let name = data['friends'][i]['name'];
          let email = data['friends'][i]['email'];
          let id = data['friends'][i]['id'];
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
    this.circle = new Circle('', 0);
    this.selectedChildCircles = [];
    this.selectedFriends = [];
    this.getAllCircles();
    this.getAllFriends();
  }

}

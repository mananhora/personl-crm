import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CirclesService } from '../circles.service';
import { FriendsService } from '../../friends/friends.service';
import { Circle } from '../circle';
import { Profile } from '../../profile/profile';

@Component({
  selector: 'app-circles-edit',
  templateUrl: './circles.edit.component.html',
  styleUrls: ['./circles.edit.component.css']
})
export class CirclesEditComponent implements OnInit {

  routeId: number;
  name: string;
  childCircles: Circle[];
  friends: Profile[];

  constructor(private circlesService: CirclesService, private friendsService: FriendsService,
    private router: Router, private route: ActivatedRoute, private location: Location) { }

  getCircleInfo(id: number) {
    this.circlesService.getCircleInfo(id)
      .subscribe(data => {
        this.name = data['circle_name'];
    });
  }

  getChildCircles(id: number) {
    this.circlesService.getChildCircles(id)
      .subscribe(data => {
        for (let i = 0; i < data['json_list'].length; i++) {
          let name = data['json_list'][i].circle_name;
          let id = data['json_list'][i].id;
          let circle = new Circle(name, id);
          if (this.childCircles) {
            this.childCircles.push(circle);
          } else {
            this.childCircles = [circle];
          }
        }
    })
  }

  getFriendsForCircle(circle_id: number) {
    this.friendsService.getFriends(circle_id)
      .subscribe(data => {
        for (let i = 0; i < data['json_list'].length; i++) {
          let friend_id = data['json_list'][i]['id'];
          let name = data['json_list'][i]['name'];
          let email = data['json_list'][i]['email'];
          let friend = new Profile(name, email, friend_id);

          if (this.friends) {
            this.friends.push(friend);
          } else {
            this.friends = [friend];
          }
        }
      });
  }

  deleteCircle() {
    if (confirm('Are you sure you want to delete this circle?')) {
      this.circlesService.deleteCircle(this.routeId).subscribe();
      this.router.navigate(['/app/home']);
    }
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.name = 'this circle';
    this.routeId = +this.route.snapshot.paramMap.get('id');
    if (this.routeId) {
      this.getCircleInfo(this.routeId);
      this.getFriendsForCircle(this.routeId);
      this.getChildCircles(this.routeId);
    }
  }

}

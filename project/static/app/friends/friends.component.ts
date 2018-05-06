import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FriendsService } from './friends.service';
import { CirclesService } from '../circles/circles.service';
import { Circle } from '../circles/circle';
import { Profile } from '../profile/profile';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  routeId: number;
  name: string;
  friends: Profile[];
  childCircles: Circle[];

  constructor(private friendsService: FriendsService,
    private circlesService: CirclesService,
    private route: ActivatedRoute, private location: Location) { }

  showAllFriends() {
    this.friendsService.getAllFriends()
      .subscribe(data => {
        for (let i = 0; i < data['json_list'].length; i++) {
          let id = data['json_list'][i]['id'];
          let name = data['json_list'][i]['name'];
          let email = data['json_list'][i]['email'];
          let friend = new Profile(name, email, id);

          if (this.friends) {
            this.friends.push(friend);
          } else {
            this.friends = [friend];
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

  getFriendsForChildCircle(circle: Circle): Circle {
    this.friendsService.getFriends(circle.id)
      .subscribe(data => {
        for (let i = 0; i < data['json_list'].length; i++) {
          let id = data['json_list'][i]['id'];
          if (this.friends.find(match => match.id === id)) {
            let name = data['json_list'][i]['name'];
            let email = data['json_list'][i]['email'];
            let friend = new Profile(name, email, id);

            if (circle.friends) {
              circle.friends.push(friend);
            } else {
              circle.friends = [friend];
            }
          }
        }
      });
    return circle;
  }

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
          circle = this.getFriendsForChildCircle(circle);
          if (this.childCircles) {
            this.childCircles.push(circle);
          } else {
            this.childCircles = [circle];
          }
        }
    })
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.routeId = +this.route.snapshot.paramMap.get('id');
    if (this.routeId) {
      this.getCircleInfo(this.routeId);
      this.getFriendsForCircle(this.routeId);
      this.getChildCircles(this.routeId);
    } else {
      this.name = "all friends";
      this.showAllFriends();
    }

  }

}

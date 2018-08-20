import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FriendsService } from './friends.service';
import { CirclesService } from '../circles/circles.service';
import { Circle } from '../circles/circle';
import { Profile } from '../profile/profile';
import { Response } from '@angular/http'

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  loading = true;
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
        for (let i = 0; i < data['friends'].length; i++) {
          let id = data['friends'][i]['id'];
          let name = data['friends'][i]['name'];
          let email = data['friends'][i]['email'];
          let friend = new Profile(name, email, id);
          if (data['friends'][i]['image_url']) friend.img = data['friends'][i]['image_url'];

          if (this.friends) {
            this.friends.push(friend);
          } else {
            this.friends = [friend];
          }
        }
        this.loading = false;
      })
  }

  searchFriends(keyword : string){
    console.log("someone searched for: " + keyword);
    this.friendsService.searchFriends(keyword)
      .subscribe(
        data => console.log(data);
      );
  }

  getFriendsForCircle(circle_id: number) {
    this.friendsService.getFriends(circle_id)
      .subscribe(data => {
        for (let i = 0; i < data['friends'].length; i++) {
          let friend_id = data['friends'][i]['id'];
          let name = data['friends'][i]['name'];
          let email = data['friends'][i]['email'];
          let friend = new Profile(name, email, friend_id);
          if (data['friends'][i]['image_url']) friend.img = data['friends'][i]['image_url'];

          if (this.friends) {
            this.friends.push(friend);
          } else {
            this.friends = [friend];
          }
        }
        this.loading = false;
      });
  }

  getFriendsForChildCircle(circle: Circle): Circle {
    this.friendsService.getFriends(circle.id)
      .subscribe(data => {
        for (let i = 0; i < data['friends'].length; i++) {
          let id = data['friends'][i]['id'];
          // filter friends through the parent list,
          if (this.friends && this.friends.find(match => match.id === id)) {
            let name = data['friends'][i]['name'];
            let email = data['friends'][i]['email'];
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
        this.name = data['circle']['circle_name'];
    });
  }

  getChildCircles(id: number) {
    this.circlesService.getChildCircles(id)
      .subscribe(data => {
        for (let i = 0; i < data['child_circles'].length; i++) {
          let name = data['child_circles'][i].circle_name;
          let id = data['child_circles'][i].id;
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
    // if circle is specified,
    if (this.routeId) {
      this.getCircleInfo(this.routeId);
      this.getFriendsForCircle(this.routeId);
      this.getChildCircles(this.routeId);
    } else {
      // otherwise display full contact list
      this.name = "all friends";
      this.showAllFriends();
    }

  }

}

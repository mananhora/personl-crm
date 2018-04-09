import { Component, OnInit } from '@angular/core';
import { CirclesService } from './circles.service';
import { FriendsService } from '../friends/friends.service';
import { Circle } from './circle';
import { Profile } from '../profile/profile';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.css']
})
export class CirclesComponent implements OnInit {

  circles: Circle[];
  friends: Profile[];

  constructor(private circlesService: CirclesService,
    private friendsService: FriendsService) { }

  showAllCircles() {
    this.circlesService.getCircles()
      .subscribe(data => {
        for (let i = 0; i < data['json_list'].length; i++) {
          let name = data['json_list'][i]['circle_name'];
          let id = data['json_list'][i]['id'];
          let circle = new Circle(name, id);

          if (this.circles) {
            this.circles.push(circle);
            this.showFriends(id);
          } else {
            this.circles = [circle];
            this.showFriends(id);
          }
        }
      });
  }

  onClick(id: number) {
    let circle = this.getCircleById(id);
    console.log('clicked ', id);
    if (circle.childCircles) {
      this.circles = circle.childCircles;
    } else {
      // this.circles = friends;
      // this.friends = circle.friends;
    }
  }

  showFriends(id: number) {
    this.friendsService.getFriends(id)
      .subscribe(data => {
        let friends: string[];
        let circle = this.getCircleById(id);

        for (let i = 0; i < data['json_list'].length; i++) {
          if (friends) {
            friends.push(data['json_list'][i]['name']);
          } else {
            friends = [ data['json_list'][i]['name'] ];
            console.log('friends is now ', friends);
          }
        }

        circle.friends = friends;
      });
  }

  getCircleById(id: number): Circle {
    return this.circles.find(function (circle) {
      return circle.id === id;
    });
  }

  ngOnInit() {
    this.showAllCircles();
  }

}

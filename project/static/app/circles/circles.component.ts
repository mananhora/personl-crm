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
          } else {
            this.circles = [circle];
          }
        }
    });
  }

  // getFriends(id: number) {
  //   console.log('yo: tryna get friends');
  //   this.friendsService.getFriends(id)
  //     .subscribe(data => {
  //       console.log('yo: found ', data['json_list']);
  //       for (let i = 0; i < data['json_list'].length; i++) {
  //         if (this.friends) {
  //           this.friends.push(data['json_list'][i]['name']);
  //         } else {
  //           this.friends = [ data['json_list'][i]['name'] ];
  //         }
  //       }
  //       if (this.friends) {
  //         this.friends.push('example name');
  //       } else {
  //         this.friends = [ 'example name' ];
  //       }
  //   });
  // }

  ngOnInit() {
    this.showAllCircles();
  }

}

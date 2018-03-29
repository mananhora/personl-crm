import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  constructor(private friendsService: FriendsService, private circlesService: CirclesService) { }

  addFriend() {
    this.friendsService.addFriend({
        name: this.friend.name,
        email: this.friend.email,
        location: '',
      }).subscribe();
  }

  getAllCircles() {
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
        console.log(this.circles);
      });
  }

  ngOnInit() {
    this.friend = new Profile('', '', 555);
    this.getAllCircles();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FriendsService } from './friends.service';
import { Circle } from '../circles/circle';
import { Profile } from '../profile/profile';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  routeId: number;
  friends: Profile[];

  constructor(private friendsService: FriendsService,
    private route: ActivatedRoute,
    private location: Location) { }

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

  getFriendsForCircle(id: number) {
    this.friendsService.getFriends(id)
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
      });
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.routeId = +this.route.snapshot.paramMap.get('id');
    if (this.routeId) {
      this.getFriendsForCircle(this.routeId);
    } else {
      this.showAllFriends();
    }

  }

}

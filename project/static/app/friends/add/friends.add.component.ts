import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FriendsService } from '../friends.service';
import { Profile } from '../../profile/profile';

@Component({
  selector: 'app-friends-add',
  templateUrl: './friends.add.component.html',
  styleUrls: ['./friends.add.component.css']
})
export class FriendsAddComponent implements OnInit {

  friend: Profile;

  constructor(private friendsService: FriendsService) { }

  addFriend() {
    this.friendsService.addFriend({
        name: this.friend.name,
        email: this.friend.email,
        location: 'rochester',
      }).subscribe();
  }

  ngOnInit() {
    this.friend = new Profile('', '', 555);
  }

}

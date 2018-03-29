import { Component, OnInit } from '@angular/core';
import { CirclesService } from '../circles.service';
import { Circle } from '../circle';
import { Profile } from '../../profile/profile';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends: Profile[];

  constructor(private circlesService: CirclesService) { }

  showAllFriends() {
    this.circlesService.getAllFriends()
      .subscribe(data => {
        console.log(data);

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

  onClick(friend: Profile) {
    // alert('okkk');
  }

  ngOnInit() {
    this.showAllFriends();
  }

}
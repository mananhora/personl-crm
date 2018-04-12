import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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
  friends: Profile[];
  selectedFriends: string[];

  constructor(private circlesService: CirclesService,
    private friendsService: FriendsService,
    private router: Router) { }

  addCircle() {
    this.circlesService.addCircle(this.circle.name)
      .subscribe(data => {
        // if successful,
        this.router.navigate(['/app/home']);
      });

    // for (friend in selectedFriends) {
    //   this.circlesService.addFriendToCircle({
    //     friend_id: friend,
    //     circle_id: circle_id,
    //   });
    // }
  }

  getAllFriends() {
    this.friendsService.getAllFriends()
      .subscribe(data => {
        for (let i = 0; i < data['json_list'].length; i++) {
          let name = data['json_list'][i]['name'];
          let email = data['json_list'][i]['email'];
          let id = data['json_list'][i]['id'];
          let profile = new Profile(name, id, email);

          if (this.friends) {
            this.friends.push(profile);
          } else {
            this.friends = [profile];
          }
        }
    })
  }

  ngOnInit() {
    this.circle = new Circle('', 123);
    this.getAllFriends();
  }

}
